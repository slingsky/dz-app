import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo(state = initialState, action) {
	switch (action.type) {

		// 修改城市
		case actionTypes.UPDATE_CITYNAME:
			return action.data

		default:
			return state
	}

}