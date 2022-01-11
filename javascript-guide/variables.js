// Single line comment
/* Multiline
 * comment */

module.exports.addTwoNumbers = function addTwoNumbers(x, y) {
	return x + y;
};

module.exports.strToInt = function strToInt(string, base) {
	return parseInt(string, base);
};

module.exports.strToFloat = function strToFloat(string) {
	return parseFloat(string);
};

module.exports.scopeError = function scopeError() {
	if (true) {
		let y = 5;
	}
	try {
		throw "Scope error";
	}
	catch (e) {
		return e;
	}
};
