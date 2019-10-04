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


// Structure
$.ajax ({
	url:; 																// url/endpoint-to-API
	method: "GET"; 			
	data: {},															// info to set the API
	dataType: "json",											// returned type of the response
	contentType: "application/json", 			// type of sent data in the request
	success: function(responseJSON) {

	},

	error: function(err){}
});