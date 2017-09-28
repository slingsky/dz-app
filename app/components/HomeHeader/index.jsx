import React from 'react'
import { Link, hashHistory } from 'react-router'

import './style.less'

import SearchInput from '../SearchInput'

class HomeHeader extends React.Component {
	constructor(props, context){
		super(props, context);
	}
	render() {
		return (
			<div id="homeHeader" className="clearfix">
				<div className="home-header-left float-left">
					<Link to='/city'>
						{this.props.cityName}
						&nbsp;
						<i className="icon-angle-down"></i>
					</Link>
				</div>
				<div className="home-header-right float-right">
					<Link to='/login'>
						<i className="icon-user"></i>
					</Link>
				</div>
				<div className="home-header-middle">
					<i className="icon-search"></i>
					<SearchInput placeholder="请输入关键字" enterHandle={this.enterHandle.bind(this)}/>
				</div>
				
			</div>
		)
	}
	enterHandle(value) {
		hashHistory.push(`/Search/all/${encodeURIComponent(value)}`);
	}
}

export default HomeHeader