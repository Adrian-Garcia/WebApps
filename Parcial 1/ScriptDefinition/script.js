// variables
let name;
let age;
var pet;

name = "Adrian";
age = 20;
pet = "burbuja";

// conditions
if (expresion) {

}

else {

}

// Switches 
switch (option) {
	
	case "January":
		doStuff();
	break;

	case 4:
		doStuff();
	break;

	default:
		doStuff();
}

// Arrays
let arrayNums = [];
let arrDeclare = [1, 2, 3];		// Declared previously
arrDeclare.push(4);				// Push 4
arrDeclare.pop();				// Pop 4

// Loops
do {
	doSomethig();
} while(expresion);

while (expresion) {
	doSomethig();
}

for (variable; expresion; update) {
	doSomethig();
}

for each ((item) => { // Can only be used for arrays
	doSomethig();
});

// functions
function nameFunction(parameters) {

	return something;
}

// expresions
nameFunction = (parameters) => {

	return something;
}

let numbers = [1,2,3];

// forEach loop
numbers.forEach ((itenm, index) =>{

});

// Object declaration
let obj = {
    firstName: "Fer",
    lastName: "Manzanita",
    age: 19,
    languades: ["German", "French"],
    grades: [100, 100, 95],
    school: {
        name: "UG",
        foundationYear: 1980
    },

    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// Display in console
console.log("mesage");

// Display object name
console.log(obj.firstName);

// change instance variable
obj['firstName'] = "Robert";
obj.age = 24;

// Display grades of an objct
for (i=0; i<obj.grades.length; i++) {
	console.log(obj.grades[i]);
}

// Get data from an instance and store it in a variable
let keys = Object.keys(obj); 		
let values = Object.values(obj);

// Arrays manipulation
let numbers = [1,2,3,4];
numbers.push(5);		// Add at the end
numbers.pop(); 			// Delete the end
numbers.unshif(0);		// Add at the begining
numbers.shift();		// Delete the begining
numbers.splice(2,3);	
numbers.splice(2,0,8); 	// [1,2,8,3,4,5,6,7]

// string
let name = 'Fernanda Manzanita';

// Horrible way
let newHTML = '<div>' +
				'<div>' +
			  '</div>' +
			'</div>';

// Cool way
let bestHTML = `<div>
					<div>
						${obj.firstName}
					</div>
				</div>
				`;