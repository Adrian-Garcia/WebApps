/*
How to create a Node.js project

	1.	npm init

	2.	npm install name-package 	In this case, name-package is express

	3.	npm start

	3.5	nodemon nameOfFile.js		In this case, nameOfFile.js is server.js
*/

let mongoose = require('mongoose');	
let express = require('express'); 	// Similar to #include <> or import
let morgan =require ('morgan'); 	// To log actions in the console

let app = express();			// Hold all the features that that function have

app.use(express.static('public'));
app.use(morgan('dev'));

let {petList} = require('./model');

mongoose.Promise = global.Promise;

app.post( "/api/postPet", jsonParser(req, res, next) => {

	let {name, typeOfPet, id} = req.body;

	if (!name || !typeOfPet || !id) {
		res.statusMessage = "Missing Field in body";
		return res.status(406).json({
			message : "Missing Field in body",
			status : 406
		});
	}

	// We still need to validate that the id is not yet on the database

	let newPet = {
		name,
		typeOfPet,
		id
	}

	petList.post(newPet)
		.then(pet => {
			res.status(201).json(pet);
		})
		.catch(err => {
			res.statusMessage = "Something went wrong with the DB";
			return res.status(500).json({
				message: "Something went wrong with the DB",
				status: 500
			})			
		})
});

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

// add.post('/api/postPet/:id', (req,		res,	  next) => {

// 	return res.status(201).json (nameOfPets);	
// });

// add.delete('/api/removePet/:id', (req,		res,	  next) => {
// 	return res.status(200).json (nameOfPets);	
// });

// add.put('/api/updatePet/:id', (req,		res,	  next) => {
// 	return res.status(200).json (nameOfPets);	
// });

// app.listen('8080', () => {

// 	console.log( "App running on localhost:8080" );

// });


function runServer(port, databaseUrl){
	
	return new Promise( (resolve, reject ) => {
		
		mongoose.connect(databaseUrl, response => {
			
			if ( response ) {
				return reject(response);
			}
			
			else {
	
				server = app.listen(port, () => {
					console.log( "App is running on port " + port );
					resolve();
				})
			
				.on( 'error', err => {
					mongoose.disconnect();
					return reject(err);
				})
			}
		});
	});
}

let server;

function closeServer() {
	return mongoose.disconnect()
	.then(() => {
		
		return new Promise((resolve, reject) => {
			console.log('Closing the server');
		
			server.close( err => {
				if (err) {
					return reject(err);
				}
				else {
					resolve();
				}
			});
		});
	});
}

runServer( 8080, "mongodb://localhost/petsDB" )
.catch( err => {
	console.log( err );
});

module.exports = { app, runServer, closeServer };

/*
Darabase 
	
	1. Run 
		mongo d

	2. Open new terminal and navigate to this proyect
		cd Documents/Universidad/5to\ Semestre/Desarrollo\ de\ aplicaciones\ web/

	3. Run 
		npm install mongoose
		nodemon ./server.js

	4. Open new terminal and rum
		mongo
		use petsDB
		db.pet.find();

	5. make a post on postman 			// I actualy didnt get this one 
*/