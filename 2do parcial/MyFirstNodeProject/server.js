/*
How to create a Node.js project

	1. 	npm init

	2. 	npm install name-package 	In this case, name-package is express

	3. 	npm start

	3.5	nodemon nameOfFile.js		In this case, nameOfFile.js is server.js
*/

let express = require('express'); 	// Similar to #include <> or import
let morgan =require ('morgan'); 	// To log actions in the console

let app = express();			// Hold all the features that that function have

app.use(morgan('dev'));

let nameOfPets = [
	{
		name: "Burbuja",
		typeOfPet: "Dog"
	},
	{
		name: "Kia",
		typeOfPet : "Dog"
	},
	{
		name: "Jagger",
		typeOfPet : "Dog"
	},
	{
		name: "kirby",
		typeOfPet : "Dog"
	}
];

/* Middleware
	a function that is execute previous that any other */

// 		       request	response  next
app.get( '/api/pets', (req, 	res, 	  next) => {

	console.log ( "Req query", req.query );

	return res.status(200).json (nameOfPets);	// status(200) is sucssess status code

});

app.get( '/api/pets/:id', (req, 	res, 	  next) => {

	console.log ( "Req param", req.params );

	return res.status(200).json (nameOfPets);	// status(200) is sucssess status code

});



app.listen('8080', () => {

	console.log( "App running on localhost:8080" );

});
