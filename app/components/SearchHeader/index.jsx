import React from 'react'
import './style.less'
import {hashHistory} from 'react-router'

import SearchInput from '../SearchInput'

class SearchHeader extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div id="searchHeader" className="clearfix">
				<div className="home-header-left float-left" onClick={this.clickHandle.bind(this)}>
						<i className="icon-chevron-left"></i>
				</div>
				<div className="home-header-middle">
					<i className="icon-search"></i>
					<SearchInput placeholder="请输入关键字" value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
				</div>
				
			</div>
		)
	}
	clickHandle() {
		window.history.back();
	}
	enterHandle(value) {
		const type = this.props.type;
		hashHistory.replace(`/search/${type}/${encodeURIComponent(value)}`);
	}
}

export default SearchHeader;