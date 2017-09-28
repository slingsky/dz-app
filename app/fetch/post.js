import 'whatwg-fetch'
import 'es6-promise'

export function post(url, paramsObj) {
	var result = fetch(url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(paramsObj)
	});

	return result;
}