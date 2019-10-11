$('.submit').on('click', function (event) {
	event.preventDefault();

	let APIurl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+$('.cocktail').val();

	fetch(APIurl)
		.then(function(response){
			if ( response.ok ) {
				console.log(response);;
				return response.json();
			}
			throw new Error("Something went wrong!");
		})
		.then( function( responseJSON ){
			$(".content").append("");
		})

})