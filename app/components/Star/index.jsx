import React from 'react'

import './style.less';
export default class Star extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
      star: 0
    }
	}
	render() {
		let starNum = this.state.star;
		if(starNum > 5){
			starNum = starNum % 5
		}
		return (
			<div className="star-container">
				{
					[1,2,3,4,5].map((item, index) => {
						let lightName = starNum >= item ? ' light' : '';
						return <i key={index} className={'icon-star' + lightName} onClick={this.clickHandle.bind(this, item)}></i>
					})
				}
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			star: this.props.num || 0
		})
	}
	clickHandle(star) {

		const clickCallback = this.props.clickCallback;

		if (!clickCallback) {
      return
    }

		this.setState({
      star: star
    })

    clickCallback(star)
	}

}