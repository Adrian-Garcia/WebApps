
function watchForm(){

  $("#newsForm").on("submit", function( e ){
    
    e.preventDefault();

    var url = 'https://newsapi.org/v2/everything?' +
          'q='+$("#searchItem").val()+'&' +
          'from=2019-10-04&' +
          'sortBy=popularity&' +
          'apiKey=1d1ce8792f8b4565b9c1831ba51b1d17';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })

        .then( function( responseJSON ) {
          console.log(Promise);
          $(".results").append(`<p>A</p>`);
        })
  });
}


watchForm();