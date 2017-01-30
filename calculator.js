function Calculator () {
}

//Suma
Calculator.prototype.sum = function(x,y) {
	return (x+y);
}

//Resta
Calculator.prototype.rest = function(x,y) {
	return (x-y);
};

//Multiplicacion
Calculator.prototype.mul = function(x,y) {
	return (x*y);
}

module.exports.calculator = Calculator;
