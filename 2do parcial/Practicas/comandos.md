#Status JSON

	200 	OK					Request Succsesful	
	201 	Created				Created a new resource
	202		Accepted			Request recibed, but not excecuted yet
	400 	Bad Request 		Bad request on client
	404  	Not Found			Host have server conection, but the resource was not found 
	406 	Not acceptable		El servidor no es capaz de devolver los datos en ninguno de los formatos aceptados por el cliente
	409		Conflict 			Conflict with a rule 
____________________________________________________________________________________________________________________________

#Mongo comands
	
Comand to run mongo
	
	mongod

Show existent databases

	Show dbs

Create a new database

	mongoimport --db RestaurantDB --collection restaurant --drop --file /path/to/the/file

Use created Database

	use RestaurantDB

Get Colection Names

	db.getCollectionNames()

Get collection Names more organized

	db.getCollectionNames().pretty()

Get Something specific

	db.restaurant.find( { name: "Twins Pub"} ). pretty();

Get one data

	db.restaurant.findOne().pretty()

Insert a value
	
	let newRestaurant = {name: "Los Generales", cuisine: "Mexican", address:{}, grades: [], borough: "", restaurant_id: "123456789"}
	
	db.restaurant.insert(newRestaurant);		

Search for something

	db.restaurant.findOne({ restaurant_id : "123456789"})

Save data in a variable

	let doc = db.restaurant.findOne({ restaurant_id : "123456789"})

Update a variable

	db.restaurant.updateOne({ id: doc._id}, {$set : {borough : "Monterrey"}})	

Use count function

	db.restaurant.find( {restaurant_id : "123456789"}).count()

Remove data from db

	db.restaurant.remove( { _id: doc._id})

Exit

	Ctr + C	