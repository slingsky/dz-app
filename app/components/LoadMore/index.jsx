import React from 'react';

import './style.less'

class LoadMore extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className="load-more" ref="wrapper">
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
				}
			</div>
		)
	}
	loadMoreHandle() {
		this.props.loadMoreFn();
	}
	componentDidMount() {
		const wrapper = this.refs.wrapper;
		const loadMoreFn = this.props.loadMoreFn;

		let timer;
		window.addEventListener('scroll',function(){
			if(this.props.isLoadingMore) return;
			if(timer){
				clearTimeout(timer);
			}

			timer = setTimeout(callback, 50);

		}.bind(this), false);

		function callback() {
			let top = wrapper.getBoundingClientRect().top;
			let windowHeight = window.screen.height;
			console.log(top,'top')
			console.log(windowHeight,'windowH')
			if(top && top < windowHeight){
				loadMoreFn()
			}
		}

	}
}

export default LoadMore;