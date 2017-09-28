import React from 'react'
import { hashHistory } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from '../../../actions/store.js'

import BuyAndStor from '../../../components/BuyAndStore'

class Buy extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isStore: false
		}
	}
	render() {
		return (
				<BuyAndStor isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
		)
	}
	componentDidMount() {
		//检查当前用户是否收藏
		this.checkStoreState();
	}
	checkStoreState() {
		const id = this.props.id;
		const data = this.props.store;

		// some 即任何一个满足即可
		data.some(item => {
			if(item.id == id){

				this.setState({
					isStore: true
				})

				return true; // 跳出循环
			}
		})
	}
	// 是否登录检查
	loginCheck() {
		const userinfo = this.props.userinfo;
		const id = this.props.id;
		if(!userinfo.userName){
			hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
      return false
		}
		return true;
	}
	//购买事件
	buyHandle() {
		//登录判断
		const loginFlag = this.loginCheck();
		if(!loginFlag) return;

		/* ---- 省略了购买流程 ---- */

		hashHistory.push('/user');
	}
	// 收藏事件
	storeHandle() {
		//登录判断
		const loginFlag = this.loginCheck();
		if(!loginFlag) return;

		const id = this.props.id;
		const storeActions = this.props.storeActions;
		
		if(this.state.isStore){
			//执行删除操作
			storeActions.rm({
				id: id
			})
		}else{
			// 未收藏，则添加到收藏中
      storeActions.add({id: id})
		}
		
		// 修改状态
		this.setState({
			isStore: !this.state.isStore
		})

	}
}

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo,
		store: state.store
	}
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy);