import React from 'react';

import Item from './Item'

class OrderList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
			<div>
				{
					data.map((item, index) =>{
						return <Item key={index} data={item} submitComment = {this.props.submitComment}/>
					})
				}
			</div>
		)
	}
}

export default OrderList;