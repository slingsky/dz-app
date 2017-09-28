import React from 'react'
import LocalStore from '../util/localStore.js';
import { CITYNAME } from '../config/localStoreKey.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActions from '../actions/userinfo.js';

class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			initDone: false
		}
	}

	render() {
		return (
			<div>
				{
					this.state.initDone
					? this.props.children
					: <div>加载中...</div>
				}
			</div>
		)
	}

	componentDidMount() {
		//从localstorerage里获取城市
		let cityName = LocalStore.getItem(CITYNAME);
		if(cityName == null){
			cityName = '上海'
		}

		this.props.userinfoActions.update({
			cityName: cityName
		})

		this.setState({
			initDone: true
		})

	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		userinfoActions: bindActionCreators(userInfoActions, dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);