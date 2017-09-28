import React from 'react';

import './style.less';

class HomeAd extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clearfix">
          {this.props.data.map((item, index) => {
            return  <div key={index} className="ad-item float-left">
				              <a href={item.link} target="_blank">
				                  <img src={item.img} alt={item.title}/>
				                  <p>{item.title}</p>
				              </a>
				            </div>
          })}
        </div>
    	</div>
		)
	}
}

export default HomeAd;