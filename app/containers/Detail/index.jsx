import React from 'react';

import Header from '../../components/Header';
import Info from './subpage/Info';
import Buy from './subpage/Buy';
import Comment from './subpage/Comment';

class Detail extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const id = this.props.params.id;
		return (
			<div>
				<Header title="商品详情"/>
				<Info id={id}/>
				<Buy id={id}/>
				<Comment id={id} />
			</div>
		)
	}
}

export default Detail;