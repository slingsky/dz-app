import { get } from '../get.js'
import { post } from '../post.js'

export function getOrderListData(userName) {
	const result = get(`/api/orderList/${userName}`);
	return result;
}

export function postComment (id, comment, star) {
	const result = post(`/api/submitComment`,{
		id,
		comment,
		star
	})

	return result;
}