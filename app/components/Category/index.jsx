import React from 'react';
import ReactSwipe from 'react-swipe';

import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			index: 0
		}
	}

	render() {
		let opt = {
			callback: function(index) {
				this.setState({index: index})
			}.bind(this)
		}
		return (
			<div id="home-category">
				<ReactSwipe className="carousel" swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/meishi"><li className="float-left meishi">美食</li></Link>
              <Link to="/search/maoyan"><li className="float-left maoyan">猫眼电影</li></Link>
              <Link to="/search/jiudian"><li className="float-left jiudian">酒店</li></Link>
              <Link to="/search/xiuxianyule"><li className="float-left xiuxianyule">休闲娱乐</li></Link>
              <Link to="/search/waimai"><li className="float-left waimai">外卖</li></Link>
              <Link to="/search/huoguo"><li className="float-left huoguo">火锅</li></Link>
              <Link to="/search/liren"><li className="float-left liren">丽人</li></Link>
              <Link to="/search/zhoubianyou"><li className="float-left zhoubianyou">周边游</li></Link>
              <Link to="/search/KTV"><li className="float-left ktv">KTV</li></Link>
              <Link to="/search/hunshasheying"><li className="float-left hunshasheying">婚纱摄影</li></Link>
            </ul>
	        </div>
	        <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
              <Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
              <Link to="/search/aiche"><li className="float-left aiche">爱车</li></Link>
              <Link to="/search/yundongjianshen"><li className="float-left yundongjianshen">运动健身</li></Link>
              <Link to="/search/gouwu"><li className="float-left gouwu">购物</li></Link>
              <Link to="/search/qinzi"><li className="float-left qinzi">亲子</li></Link>
              <Link to="/search/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
              <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
              <Link to="/search/yiliaojiankang"><li className="float-left yiliaojiankang">医疗健康</li></Link>
              <Link to="/search/daojia"><li className="float-left daojia">到家</li></Link>
            </ul>
	        </div>
	        <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
              <Link to="/search/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
              <Link to="/search/ribencai"><li className="float-left ribencai">日本菜</li></Link>
              <Link to="/search/meifa"><li className="float-left meifa">美发</li></Link>
              <Link to="/search/meijiameijie"><li className="float-left meijiameijie">美甲美睫</li></Link>
              <Link to="/search/spa"><li className="float-left spa">美容SPA</li></Link>
              <Link to="/search/shoushenqianti"><li className="float-left shoushenqianti">瘦身纤体</li></Link>
              <Link to="/search/qinzisheying"><li className="float-left qinzisheying">亲子摄影</li></Link>
              <Link to="/search/qinziyoule"><li className="float-left qinziyoule">亲子游乐</li></Link>
              <Link to="/search/all"><li className="float-left all">全部分类</li></Link>
            </ul>
	        </div>
      	</ReactSwipe>
      	<div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
            <li className={this.state.index === 2 ? "selected" : ''}></li>
          </ul>
        </div>
			</div>
		)
	}
}

export default Category;