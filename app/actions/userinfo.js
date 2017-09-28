import * as actionTypes from '../constants/userinfo'

export function update(data) {
	return {
		type: actionTypes.UPDATE_CITYNAME,
		data
	}
}