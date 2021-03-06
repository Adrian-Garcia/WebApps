function watchForm(){
  let submitButton = document.getElementById( "submitButton" );

  submitButton.addEventListener("click", ( event ) =>{
    event.preventDefault();
    
    // Validate the fullName input
    if ( $("#fullName").val() === "" ){
      $("#fullNameErrorMessage").text("Please provide your name");
    }
    else{
      $("#fullNameErrorMessage").text("");
    }

    // Validate the email input
    if ( $("#email").val() === "" ){
      $("#emailErrorMessage").show();
    }
    else{
      $("#emailErrorMessage").hide();
    }    

    // Validate dropdown menu

    if ( $("#country").val() === "0" ) {
      $("#countryErrorMessage").text("Please select a country");
    }
    else{
      $("#countryErrorMessage").text("");
    }

    // Validate gender inputs
    let genderRadios = document.getElementsByName( "gender" );
    let genderErrorMessage = document.getElementById( "genderErrorMessage" );
    let radioFlag = false;

    for ( let i = 0; i < genderRadios.length; i ++ ){
      if ( genderRadios[i].checked ){
        radioFlag = !radioFlag;
      }
    }

    if ( radioFlag ){
      genderErrorMessage.textContent = "";
    }
    else{
      genderErrorMessage.textContent = "Please select a gender";
    }

  });

  let menuItems = document.getElementsByTagName( "li" );

  for ( let i = 0; i < menuItems.length; i ++ ){
    menuItems[i].addEventListener( "click", (event) =>{
      event.preventDefault();
      
      let selected = document.getElementsByClassName( "selected" );

      selected[0].className = "";

      event.target.className = "selected";

      let currentSelected = document.getElementsByClassName( "currentSelected" );

     
      currentSelected[0].hidden = true;
      currentSelected[0].className = "";

      let selectedSection = document.getElementById( event.target.id + "Section" );

      selectedSection.hidden = false;
      selectedSection.className = "currentSelected";


    });
  }
}

watchForm();