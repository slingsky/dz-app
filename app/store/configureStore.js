import {
	createStore
} from 'redux'
import rootReducer from '../reducers'

// 配置仓库
export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState,

		window.devToolsExtension ? window.devToolsExtension() : undefined
	)

	return store
}