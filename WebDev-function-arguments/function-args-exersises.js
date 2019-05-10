//your code here
//1. Create a function called returnArg that takes in an argument and returns it

function returnArg() {
	return arg;
}
//2. Create a function called addArgPlusThree that takes in an argument and
//returns it's value plus 3
//addArgPlusThree(3) -> would return 6
function addArgPlusThree(arg) {
	return arg + 3;
}

//3. Create a function called addTwoArgs that takes in two arguments
//adds them together, and returns that value
//addTwoArgs(5, 5) -> would return 10
function addTwoArgs(arg1, arg2) {
	return arg1 + arg2;
}

//4. Create a function called addArgAndVar that takes in an argument and
//returns the value of the argument plus value
//addArgAndVar(6) -> would return 9
var addArgAndVar = function(arg1) {
	const value = 3;
	return arg1 + value;
};
