/*
How to create a Node.js project

	1.	npm init

	2.	npm install name-package 	In this case, name-package is express

	3.	npm start

	3.5	nodemon nameOfFile.js		In this case, nameOfFile.js is server.js
*/

let express = require('express'); 	// Similar to #include <> or import
let morgan =require ('morgan'); 	// To log actions in the console

let app = express();			// Hold all the features that that function have

app.use(express.static('public'));
app.use(morgan('dev'));

let nameOfPets = [
	{
		name: "Burbuja",
		typeOfPet: "Dog",
		id: "1"
	},
	{
		name: "Kia",
		typeOfPet : "Dog",
		id: "2"
	},
	{
		name: "Jagger",
		typeOfPet : "Dog",
		id: "3"
	},
	{
		name: "kirby",
		typeOfPet : "Dog",
		id: "4"
	}
];

/* Middleware
	a function that is execute previous that any other */

// 		       						request		response  next
app.get( '/api/pets', (	req, 			res, 	  	next) => {

	console.log ( "Req query", req.query );
	return res.status(200).json (nameOfPets);	// status(200) is sucssess status code

	/* errors
	res.statusMessage = "Something went wrong";
	return res.status(400).json ({				// status(400) is error status code
		code:400,
		message: "Something went wrong"
	}) */
});

app.get( '/api/pets/:id', (req, 	res, 	  next) => {

	console.log ( "Req param", req.params );
	return res.status(200).json (nameOfPets);	// status(200) is sucssess status code

});

// http://localhost:8080/api/pets/byId?id=
app.get( '/api/getById/:id', (req,		res,	  next) => {

	console.log ( "Req param", req.params);
	console.log (req);

	return res.status(200).json (nameOfPets);	// status(200) is sucssess status code

});

add.post('/api/postPet/:id', (req,		res,	  next) => {

	return res.status(201).json (nameOfPets);	
});

add.delete('/api/removePet/:id', (req,		res,	  next) => {
	return res.status(200).json (nameOfPets);	
});

add.put('/api/updatePet/:id', (req,		res,	  next) => {
	return res.status(200).json (nameOfPets);	
}); 

app.listen('8080', () => {

	console.log( "App running on localhost:8080" );

});
