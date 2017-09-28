import { get } from '../get.js';

export function getDetailInfo(id) {
	const result = get(`/api/detail/info/${id}`);
	return result;
}

export function getDetailComment(id,page) {
	const result = get(`/api/detail/comment/${id}/${page}`);
	return result;
}