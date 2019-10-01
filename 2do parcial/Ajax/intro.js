fetch(url, settings)
	.then (response, function() {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText + "Something went grong");
	})
	.then(responseJSON, function() {
		// Logic to get info
	})