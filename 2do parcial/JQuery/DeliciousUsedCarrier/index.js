function main() {

  let cats = document.getElementsByClassName("thumbnail");
  let hero = document.getElementsByClassName("hero");

  for (let i=0; i<cats.length; i++) {

    cats[i].addEventListener("click", (event) => {

      event.preventDefault();

      if (i == 0) {
        $(".hero")
      }

      if (i == 1)
        console.log(i);

      if (i == 2)
        console.log(i);

      if (i == 3)
        console.log(i);


    }); 
  }

} main();