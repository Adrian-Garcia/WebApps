##Basic database concepts

###Syntax

```SQL
SELECT	* 			// 2
FROM	Table 		// 1
WHERE	Condition 	// 3
```

```javascript
/* (2)			(1)			(3)
FROM		   SELECT	 Condition*/
collectionName.find 	(condition)
```

```SQL
UPDATE	Table
WHERE 	Condition
SET 	Values
let doc = collectionName.find
```

###Non-relational DB

1. Collections
2. Relationships
3. Documents
4. Querying

###Example of Condition

```javascript
{name: "Mario", id: 123456}
```

it always retrieves an array even when there's only one element 

```javascript
.findOne( ) // it only retrieves one object 
let doc = collectionName.findOne({id: 123456}), 
```

first parameter is the id of the object that we want to modify

```javascript
collectionName.updateOne({_id: doc._id}, {$set: {name:"Maria"}} );
```

there's also an update() but it's like the find and it will target everything

```MySQL
UPDATE Table 
WHERE Condition   
SET Values
```

###Run Mongo

	1. Run MongoDB on terminal writing
		mongod

	2. Open a new terminal

	3. To see databases
		show dbs

	4. New Database
		mongoimport --db RestaurantDB --collection restaurant --drop --file /path/to/the/file

	5. Since we create a new DB
		5.1 You can run
			show dbs
		5.2 And see the created database	

	6. To enter to the created database
		use RestaurantDB

	7. To see collection names
		db.getCollectionNames()

	8. Get 
		db.restaurant.find().pretty()

	9. Get Twins Pub
		db.restaurant.find( { name : "Twins Pub" } ).pretty()

	10. Get One
		db.restaurant.findOne().pretty()

	11. Insert
		11.1 Create a variable
			let newRestaurant = {name: "Los Generales", cuisine: "Mexican", address:{}, grades: [], borough: "", restaurant_id: "123456789"}
		11.2 Insert to database 
			db.restaurant.insert(newRestaurant);		

	12. Search last data uploaded
		db.restaurant.findOne({ restaurant_id : "123456789"})

	13. Save in a variable
		let doc = db.restaurant.findOne({ restaurant_id : "123456789"})

	14. Update
		db.restaurant.updateOne({ id: doc._id}, {$set : {borough : "Monterrey"}})	

	15. Count
		db.restaurant.find( {restaurant_id : "123456789"}).count()

	16. Update variable doc
		doc = db.restaurant.findOne( {restaurant_id : "123456789"})

	17. Remove
		db.restaurant.remove( { _id: doc._id})

	18. Exit with
		Ctr + C	