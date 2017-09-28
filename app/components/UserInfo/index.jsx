import React from 'react';

import './style.less'

class UserInfo extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="userinfo-container">
        <p>
          <i className="icon-user"></i>
          &nbsp;
          <span>{this.props.name}</span>
        </p>
        <p>
          <i className="icon-map-marker"></i>
          &nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
		)
	}
}

export default UserInfo;