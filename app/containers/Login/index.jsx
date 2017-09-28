import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../actions/userinfo.js'

import { hashHistory } from 'react-router';

import LoginComponent from '../../components/Login'
import Header from '../../components/Header'

class Login extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
      checking: true
    }
	}
	render() {
		return (
			<div>
				<Header title="登录"/>
				{
					this.state.checking
					? <div>{/* 等待中 */}</div>
					: <LoginComponent loginHandle={this.loginHandle.bind(this)} />
				}
			</div>
		)
	}
	componentDidMount() {
		//进行是否登录检查
		this.doCheck(); 
	}
	//登录以后的处理
	loginHandle(userName) {
		const router = this.props.params.router; // 获取参数

		//保存用户名 并 更新redux
		const actions = this.props.userinfoActions;
		let userinfo = this.props.userinfo;
		userinfo.userName = userName;
		actions.update(userinfo);

		//登录成功跳转相应页面
		if(router){
			hashHistory.push(router);
		}else{
			this.goUserPage();
		}
	}
	doCheck() {
		const userName = this.props.userinfo.userName;
		if(userName){
			// 已登录
			this.goUserPage();
		}else{
			//未登录
			this.setState({
				checking: false
			})
		}
	}
	goUserPage() {
		hashHistory.push('/user')
	}
}

function mapStateToProps(state){
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);