// Single line comment
/* Multiline
 * comment */

function addTwoNumbers(x, y) {
	return x + y;
}

function strToInt(string, base) {
	return parseInt(string, base);
}

function strToFloat(string) {
	return parseFloat(string);
}

module.exports = [ addTwoNumbers, strToInt, strToFloat ];
