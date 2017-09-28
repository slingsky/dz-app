import React from 'react';

import './style.less';
class SearchInput extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			kwd: ''
		}
	}
	render() {
		return (
			<input
				className="search-input"
				type="text"
				value={this.state.kwd}
				placeholder={this.props.placeholder}
				onChange={this.ChangeHandle.bind(this)}
				onKeyUp={this.KeyUpHandle.bind(this)}
			/>
		)
	}
	componentDidMount() {
		// 设置默认参数
		this.setState({
			kwd: this.props.value || ''
		})
	}
	ChangeHandle(e) {
		const val = e.target.value;
		this.setState({
			kwd: val
		})
	}
	KeyUpHandle(e) {
		if(e.keyCode !== 13) return;
		
		// 将动作交给前面来处理
		this.props.enterHandle(e.target.value);

	}
}

export default SearchInput;