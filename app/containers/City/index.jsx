import React from 'react'

import { hashHistory } from 'react-router'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userinfoActions from '../../actions/userinfo'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
	render() {
		return (
			<div>
				<Header title="选择城市" />
				<CurrentCity cityName={this.props.userinfo.cityName} />
				<CityList changeCityFn={ this.changeCity.bind(this) }/>
			</div>
		)
	}
	changeCity(newCity) {
		//判断
		if(newCity == null) return;
		
		//更新城市数据
		const userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userinfoActions.update(userinfo);

		//缓存新的城市
		localStore.setItem(CITYNAME, newCity);

		//返回首页
		hashHistory.push('/');

	}

}

/* -------------------- redux ---------------------- */

function mapStateToProps(state) {
	return {
		userinfo : state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)