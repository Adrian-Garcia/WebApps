let menuItems = document.getElementsByTagName( "li" );

for ( let i = 0; i < menuItems.length; i ++ ){
  menuItems[i].addEventListener( "click", (event) =>{
    
    event.preventDefault();
    
    let selected = document.getElementsByClassName( "selected" );
    let currentSelected = document.getElementsByClassName( "currentSelected" );
    let selectedSection = document.getElementById( event.target.id + "Section" );

    selected[0].className = "";
    event.target.className = "selected";

    currentSelected[0].hidden = true;
    currentSelected[0].className = "";

    selectedSection.hidden = false;
    selectedSection.className = "currentSelected";
  });
}

let menuItems = document.getElementsByTagName("li");

for (let i=0; i<menuItems.length; i++) {

  menuItems[i].addEventListener("click", (event) => {

    event.preventDefault();

    let selected = document.getElementsByClassName("selected");
    let currentSelected = document.getElementsByClassName("currentSelected");
    let selectedSection = document.getElementById(event.target.id + "Section");

    selected[0].className = "";
    event.target.className = "selected";

    currentSelected[0].hidden = true;
    currentSelected[0].className = "";

    selectedSection.hidden = false;
    selectedSection.className = "currentSelected";
  });
}