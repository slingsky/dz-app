import React from 'react';

import './style.less';
import Star from '../../components/Star'

class DeatilInfo extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var data = this.props.data;
		return (
			<div id="detail-info-container">
        <div className="info-container clear-fix">
            <div className="info-img-container float-left">
                <img src={data.img}/>
            </div>
            <div className="info-content">
                <h1>{data.title}</h1>
                <div className="star-container">
                    {/* 引用 Star 组件 */}
                    <Star num={data.star}/>
                    <span className="price">￥{data.price}</span>
                </div>
                <p className="sub-title">{data.subTitle}</p>
            </div>
        </div>
        {/* 设置 innerHTML */}
        <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
    </div>
		)
	}
}

export default DeatilInfo;