$('.submit').on('click', function (event) {
	event.preventDefault();

	let APIurl = 'https://api.github.com';	

	fetch(APIurl)
		.then(function(response){
			if ( response.ok ) {
				console.log($('.username').val())
				console.log(response);;
				return response.json();
			}
			throw new Error("Something went wrong!");
		})
		.then( function( responseJSON ){
			$(".content").append("<h1>Hello</h1>");
		})

})