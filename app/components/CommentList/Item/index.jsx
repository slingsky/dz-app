import React from 'react';

import './style.less'
import Star from '../../Star'
class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var data = this.props.data
		return (
			<div className="comment-item">
	        <h3>
	            <i className="icon-user"></i>
	            &nbsp;
	            {data.username}
	        </h3>
	        <Star num={data.star}/>
	        <p>{data.comment}</p>
	    </div>
		)
	}
}

export default Item;