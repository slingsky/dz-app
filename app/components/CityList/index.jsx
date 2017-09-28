import React from 'react'

import './style.less'

class CityList extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			cityNames : ['北京','上海','杭州','广州','苏州','深圳','南京','天津','重庆','厦门','武汉','西安']
		}
	}
	render() {
		return (
			<div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clearfix">
        	{
        		this.state.cityNames.map((item, index) => {
        			return <li key={index}>
                			<span onClick={this.clickHandle.bind(this, item)}>{item}</span>
            				</li>
        		})
        	}
          
        </ul>
    	</div>
		)
	}
	clickHandle(newCity) {
		const changeCityFn = this.props.changeCityFn;
		changeCityFn(newCity);
	}
}

export default CityList;