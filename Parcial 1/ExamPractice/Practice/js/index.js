let menu = document.getElementById('btn');
let menu2 = document.getElementById('btn2');

menu.addEventListener('click', (event) => {

	event.preventDefault();

	let name = document.getElementById("name");
	let email = document.getElementById("email");
	let pwd = document.getElementById("pwd");
	let pwdConf = document.getElementById("pwdConf");

	let spans = document.getElementsByTagName("SPAN");

	// If there is no value on name
	if (!(name && name.value))
		spans[0].innerHTML = "Name is missing"; 
	else
		spans[0].innerHTML = "";

	// If there is no value on Password
	if (!(pwd && pwd.value))
		spans[1].innerHTML = "Password is missing";
	else
		spans[1].innerHTML = "";

	// If there is no value on the email
	if (!(email && email.value))
		spans[2].innerHTML = "Email is missing";
	else
		spans[2].innerHTML = "";

	// If there is no value on the password Confirmation
	if (!(pwdConf && pwdConf.value))
		spans[3].innerHTML = "Password Confirmation is missing";
	else {
		
		// If passwords do not match 
		if (pwd.value != pwdConf.value) {
			spans[1].innerHTML = "Password do not match";
			spans[3].innerHTML = "Password do not match";
		}
		
		else
			spans[3].innerHTML = "";
	}
}); 

menu2.addEventListener('click', (event) => {

	console.log("A");
	let spans = document.getElementsByTagName("SPAN");
	spans[4].innerHTML = "AAAAAAAAAAAAAAAa";
});