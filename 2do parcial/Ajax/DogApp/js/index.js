

function watchForm(){

  $("#dogForm").on("submit", function( e ){
    e.preventDefault();

    let APIurl = "https://dog.ceo/api/breeds/image/random";
    
    fetch(APIurl)
      .then(function(response){
        if ( response.ok ){
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then( function( responseJSON ){
        $(".results").append(`<img src="${responseJSON.message}" />`);
      })
  });
}


watchForm();