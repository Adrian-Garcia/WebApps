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