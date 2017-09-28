import React from 'react';

import { getDetailComment } from '../../../fetch/detail/detail.js';
import './style.less'

import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';
class Comment extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			hasMore: false,
			isLoadingMore: false,
			page: 1,
			data: []
		}
	}
	render() {
		return (
			<div className="detail-comment-subpage">
				<h2>用户点评</h2>
				{
					this.state.data.length > 0
					? <CommentList data={this.state.data} />
					: <div>暂无数据</div>
				}
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
					: ''
				}
			</div>
			
		)
	}
	componentDidMount() {
		this.loadFirstPageData()
	}
	loadFirstPageData() {
		const id = this.props.id;
		const page = 0;
		const result = getDetailComment(id, page);
		this.resultHandle(result);
	}
	loadMoreData() {
		
		this.setState({
			isLoadingMore: true
		})

		const id = this.props.id;
		const page = this.state.page;
		const result = getDetailComment(id, page);
		this.resultHandle(result);

		this.setState({
			page: page + 1,
			isLoadingMore: false
		})
	}
	resultHandle(result) {
		result.then(res => {
			return res.json()
		}).then(json => {
			const data = this.state.data.concat(json.data);
			const hasMore = json.hasMore;
			this.setState({
				data,
				hasMore
			})
		})
	}
}

export default Comment;