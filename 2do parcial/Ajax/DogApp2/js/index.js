
function watchForm(){

  $("#dogForm").on("submit", function( e ){
    e.preventDefault();

    for (var i=0; i<$("#dogNumber").val(); i++) {
      
      let APIurl = "https://dog.ceo/api/breed/"+ $("#dogBreed").val() +"/images/random";
      
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
    }
  });
}


watchForm();