import { get } from '../get.js';

export function getSearchListData(opts) {
	const city = opts.city;
	const page = opts.page;
	const type = opts.type;
	const keywordstr = opts.keyword ? `/${opts.keyword}` : '';

	const result = get(`api/searchlist/${type}/${city}/${page}${keywordstr}`);

	return result;

}
