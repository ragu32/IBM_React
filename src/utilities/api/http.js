import { createHashHistory } from "history";
import queryString from "query-string";

const replacer = function (key, value) {
	// Filtering in properties
	if (value === undefined) {
		return null;
	}
	return value;
};

export function Http(request) {
	const browserHistory = createHashHistory();

	return new Promise((resolve, reject) => {
        debugger
		let fetchData = {
			method: request.method,
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
		};

		if (request.headers !== undefined) {
			for (var key in request.headers) {
				if (request.headers.hasOwnProperty(key)) {
					fetchData.headers[key] = JSON.stringify(request.headers[key]);
				}
			}
		}

		let endPoint = request.endPoint ? request.endPoint : process.env.REACT_APP_API_ENDPOINT;

		let fetchUrl = endPoint + request.url;

		if (request.query !== undefined) {
			let data = queryString.stringify(request.query, { arrayFormat: "bracket" });
			fetchUrl = fetchUrl + "?" + data;
		}

		if (request.data !== undefined) {
			fetchData["body"] = JSON.stringify(request.data, replacer);
		}

		fetch(fetchUrl, fetchData).then((response) => {
			{
				if (response.status === 401) { browserHistory.push("/login"); }
				else if (response.status < 400) {
					response.clone().json().then(data => {
						resolve(data);
					}).catch(() => {
						resolve(null);
					});

				}
				// else { reject(response.json()); }
			}
		}).catch((error) => {
			reject(error);
		});
	});
}


export function HttpFake(response) {

	return new Promise((resolve) => {
		resolve(response);
	});
}
