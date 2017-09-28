import React from 'react';

import './style.less'

import Star from '../../Star'

class Item extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			commentState: 2,  /* 0-未评价 1-评价中 2-已评价 */
			stars: {}
		}
	}
	render() {
		const data = this.props.data;
		return (
			<div className="order-item-container">
        <div className="clearfix">
            <div className="order-item-img float-left">
                <img src={data.img}/>
            </div>
            <div className="order-item-comment float-right">
                {
                    this.state.commentState === 0
                    // 未评价
                    ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                    :
                        this.state.commentState === 1
                        // 评价中
                        ? ''
                        // 已经评价
                        : <button className="btn unseleted-btn">已评价</button>
                }
            </div>
            <div className="order-item-content">
                <span>商户：{data.title}</span>
                <span>数量：{data.count}</span>
                <span>价格：￥{data.price}</span>
            </div>
        </div>
        {
            // “评价中”才会显示输入框
            this.state.commentState === 1
            ? <div className="comment-text-container">
                <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <Star num="0" clickCallback={this.starClickCallback.bind(this)}/>
                </div>
                <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                &nbsp;
                <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
            </div>
            : ''
        }
    </div>
		)
	}
	componentDidMount() {
		this.setState({
			commentState: this.props.data.commentState
		})
	}
	// 点击评价
	showComment() {
		this.setState({
			commentState: 1
		})
	}
	// 取消点评
	hideComment() {
		// 判断状态中原来是否存在
		const id = this.props.data.id;
		let stars = this.state.stars;
		if(stars[id]) {
			stars[id] = 0;
		}
		this.setState({
			commentState: 0,
			stars: stars
		})
	}
	// 提交点评
	submitComment() {
		// 获取操作函数
    const submitComment = this.props.submitComment;

		const id = this.props.data.id;
		const comment = this.refs.commentText.value.trim();
		const star = this.state.stars[id] || 0;
		if(!comment) return;

		submitComment(id, comment, star, this.commentOk.bind(this));
		
	}
	commentOk() {
		this.setState({
			commentState: 2
		})
	}

	starClickCallback(star) {
		const id = this.props.data.id;
		let stars = this.state.stars;
		stars[id] = star

		this.setState({
			stars: stars
		})
	}
}

export default Item;