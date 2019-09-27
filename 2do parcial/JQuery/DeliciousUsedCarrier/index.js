function main() {

  // Salazar's form
  $(".thumbnail").on("click", function(event) {
    
    event.preventDefault();

    // Get current Thumbnail
    let currentThumbnail = $(this).html();
    
    // Change hero class 
    $('.hero').html(currentThumbnail);
  });

  /* My form

  let cats = document.getElementsByClassName("thumbnail");
  let hero = document.getElementsByClassName("hero");

  for (let i=0; i<cats.length; i++) {

    cats[i].addEventListener("click", (event) => {
      event.preventDefault();

      if (i == 0) 
        $(".hero").children().attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat1.jpg');

      if (i == 1)
        $(".hero").children().attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat2.jpg');

      if (i == 2)
        $(".hero").children().attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat3.jpg');

      if (i == 3) 
        $(".hero").children().attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat4.jpg');
    }); 
  }
  */

} main();