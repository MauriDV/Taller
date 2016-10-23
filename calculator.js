function Calculator () {
}

Calculator.prototype.sum = function(x,y) {
	return (x+y);
}

Calculator.prototype.rest = function(x,y) {
	return (x-y);
};

Calculator.prototype.mul = function(x,y) {
	return (x*y);
}

module.exports.calculator = Calculator;
