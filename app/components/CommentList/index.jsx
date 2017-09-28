import React from 'react';

import Item from './Item';
import './style.less';
class CommentList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var data = this.props.data;
		return (
			<div  className="comment-list">
				{data.map((item, index) => {
						return <Item  key={index} data={item}/>
				})}
			</div>
		)
	}
}

export default CommentList;