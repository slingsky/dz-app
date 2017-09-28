import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import RouterMap from './router/routeMap';
import configureStore from './store/configureStore.js';

import './static/css/common.less'
import './static/css/font.css'
/*// 性能测试
import Perf from 'react-addons-perf';
if(__DEV__) {
	window.Perf = Perf;
}*/
const store = configureStore();

render(
	<Provider store = {store}>
		<RouterMap history = { hashHistory }/>
	</Provider>,
	document.getElementById('root')
)