import React from 'react';

import { getDetailInfo } from '../../../fetch/detail/detail.js';
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			data: false
		}
	}
	render() {
		return (
			<div>
				{
					this.state.data
					? <DetailInfo data={this.state.data}/>
					: ''
				}
			</div>
		)
	}
	componentDidMount() {
		const result = getDetailInfo(this.props.id);
		
		result.then(res => {
			return res.json()
		}).then(json => {
			this.setState({
				data: json
			})
		})
		

	}
}

export default Info;