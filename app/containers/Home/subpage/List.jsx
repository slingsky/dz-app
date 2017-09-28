import React from 'react';
import { getListData } from '../../../fetch/home/home';

import LoadMore from '../../../components/LoadMore';
import ListComponent from '../../../components/List';

import './style.less';

class List extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: [],
			hasMore: false, //是否能够进行加载
			isLoadingMore: false,
			page: 1
		}
	}
	render() {
		return (
			<div>
				 <h2 className="home-list-title">猜你喜欢</h2>
				 {
				 	this.state.data
				 	? <ListComponent data={this.state.data}/>
				 	: <div>加载中...</div>
				 }
				 {
				 	this.state.hasMore
				 	? <LoadMore isLoadingMore = {this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
				 	: ''
				 }
			</div>
		)
	}
	componentDidMount() {
		this.loadFirstPageData()
		
	}
	loadFirstPageData() {
		const cityName = this.props.cityName;
		const result = getListData(cityName, 0);
		this.resultHandle(result);
	}
	loadMoreData() {
		// 记录状态
		this.setState({
			isLoadingMore: true
		})
		
		const cityName = this.props.cityName;
		const page = this.state.page;
		const result = getListData(cityName, page)
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
			const data = json.data;
			const hasMore = json.hasMore;
			this.setState({
				data: this.state.data.concat(data),
				hasMore: hasMore
			})
		})
	}




}

export default List;