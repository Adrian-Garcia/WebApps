console.log("I am working");

function hello() {
	console.log("Hello World");
}

hello();

let menu = document.getElementById('menu');

// When you click on a button, on console,
// a message is going to be displayed
menu.addEventListener('click', (event) => {
	
	event.preventDefault();
	console.log("Clicked the menu");

	// Get vars from document
	let name = document.getElementById("name");
	let email = document.getElementById("email");
	let pwd = document.getElementById("pwd");
	let pwdConf = document.getElementById("pwdConf");
	let male = document.getElementById("male");
	let female = document.getElementById("female");

	// If name was not filled
	if (!(name && name.value)) {
		let nameDoc = document.getElementById("nameMessage");
		nameDoc.innerHTML = "Please insert name";
	} else {
		let nameDoc = document.getElementById("nameMessage");
		nameDoc.innerHTML = "";
	}

	// If email was not filled
	if (!(email && email.value)) {
		let emailDoc = document.getElementById("emailMessage");
		emailDoc.innerHTML = "Please insert email";	
	} else {
		let emailDoc = document.getElementById("emailMessage");
		emailDoc.innerHTML = "";	
	}

	// If password was not filled
	if (!(pwd && pwd.value)) {
		let pwdDoc = document.getElementById("pwdMessage");
		pwdDoc.innerHTML = "Please insert password";
	} else {
		let pwdDoc = document.getElementById("pwdMessage");
		pwdDoc.innerHTML = "";
	}

	// If password confirmation was not filled
	if (!(pwdConf && pwdConf.value)) {
		let pwdConfDoc = document.getElementById("pwdConfMessage");
		pwdConfDoc.innerHTML = "Please insert confirmation password";
	} else {
		let pwdConfDoc = document.getElementById("pwdConfMessage");
		pwdConfDoc.innerHTML = "";
	}

	// If passwords do not match
	if (pwd.value != pwdConf.value) {
		let pwdDoc = document.getElementById("pwdConfMessage");
		let pwdConfDoc = document.getElementById("pwdMessage");
		pwdDoc.innerHTML = "password does not match";
		pwdConfDoc.innerHTML = "password does not match";
	} else {
		let pwdDoc = document.getElementById("pwdConfMessage");
		let pwdConfDoc = document.getElementById("pwdMessage");
		pwdDoc.innerHTML = "";
		pwdConfDoc.innerHTML = "";
	}

	// If sex was not selected
	if (!(male && male.value) && !(female && female.value)) {
		let genderDoc = document.getElementById("genderMessage");
		genderDoc.innerHTML = "Please select gender";
	} else {
		let genderDoc = document.getElementById("genderMessage");
		genderDoc.innerHTML = "";
	}

});
