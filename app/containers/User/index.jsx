import React from 'react';
import{ hashHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../actions/userinfo.js';
import * as storeActions from '../../actions/store.js';

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
	constructor(props, context) {
		super(props, context);
		
	}
	render() {
		return (
			<div>
				<Header title="用户中心" backRouter="/" />
				<UserInfo city={this.props.userinfo.cityName} name={this.props.userinfo.userName}/>
				<OrderList />
			</div>
		)
	}
	componentDidMount() {
		if(!this.props.userinfo.userName){
			hashHistory.push('/login');
		}
	}

}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);