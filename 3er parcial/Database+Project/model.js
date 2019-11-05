let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let petSchema = mongoose.Schema({

	name 				:		{type: String},
	typeOfPet		:		{type: String},
	id					:		{
										type: Number, 
										require : true
									}
});

let Pets = mongoose.model('Pet', petSchema);

let PetList = {
	post : function(newPet) {
		return Pet.create(newPet);
						.then(pet => {
							return pet;
						});
						.catch(err => {
							throw Error(err);
						});
	}
};

module.exports = {PetList};