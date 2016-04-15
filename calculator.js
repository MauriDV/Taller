function Calculator () {
}

Calculator.prototype.sum = function(x,y) {
	return (x+y);
}

module.exports.calculator = Calculator;