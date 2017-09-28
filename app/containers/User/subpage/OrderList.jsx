import React from 'react';
import './style.less';
import { connect } from 'react-redux';
import { getOrderListData , postComment } from '../../../fetch/user/orderList.js';

import OrderListCommponent from '../../../components/OrderList'

class OrderList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				{
					this.state.data.length > 0
					? <OrderListCommponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
					: ''
				}
			</div>
		)
	}
	componentDidMount() {
		const userinfo = this.props.userinfo;
		if(userinfo.userName){
			this.loadOrderList(userinfo.userName);
		}
	}
	loadOrderList(userName) {
		const result = getOrderListData(userName);
		result.then(res => {
			return res.json();
		}).then(json => {
			this.setState({
				data: json
			})
		})
	}
	submitComment(id, comment, star, callback) {
		const result = postComment(id, comment, star);
		result.then(res => {
			return res.json()
		}).then(json => {
			if(json.errno == 0){
				callback()
			}
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
)(OrderList);