import React from 'react';

import { connect } from 'react-redux';

import { getSearchListData } from '../../../fetch/search/search.js';

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 1
}

class List extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = initialState
	}
	render() {
		return (
			<div>
				{
					this.state.data.length
					? <ListComponent data={this.state.data} />
					: <p>正在加载中...</p>
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
		this.loadFirstPageData();
	}

	componentDidUpdate(prevProps, prevState) {
		const keyword = this.props.keyword
		const type = this.props.type

		if(keyword === prevProps.keyword && type === prevProps.type) return;

		// 组件更新完成后 重置参数
		this.setState(initialState);

		// 重新加载数据
		this.loadFirstPageData();

	}

	loadFirstPageData() {
		const type = this.props.type;
		const keyword = this.props.keyword;
		const result = getSearchListData({
			city: this.props.userinfo.cityName,
			page: 0,
			type: type,
			keyword: keyword
		})

		this.resultHandle(result);
	}

	loadMoreData() {
		//改变状态
		this.setState({
			isLoadingMore: true
		});

		//处理数据
		const type = this.props.type;
		const keyword = this.props.keyword;
		const page = this.state.page;
		const result = getSearchListData({
			city: this.props.userinfo.cityName,
			page: page,
			type: type,
			keyword: keyword
		})

		this.resultHandle(result);
		
		//更新状态
		this.setState({
			page: page + 1,
			isLoadingMore: false
		});
	}

	resultHandle(result) {
		result.then(res => {
			return res.json()
		}).then(json => {
			const data = json.data;
			const hasMore = json.hasMore;
			this.setState({
				data: this.state.data.concat(data),
				hasMore: hasMore
			})
		})
	}

}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);