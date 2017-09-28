import React from 'react';
import { Link } from 'react-router';

import './style.less'

class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const data = this.props.data;
		return (
            <Link to={'/detail/' + data.id}>
    			<div className="list-item clearfix">
                    <div className="item-img-container float-left">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clearfix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clearfix">
                            <span className="price float-left">￥{data.price}</span>
                            <span className="mumber float-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </div>
            </Link>
		)
	}
}

export default Item;