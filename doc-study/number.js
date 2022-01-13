// Properties
function returnEpsilon() {
	return Number.EPSILON;
};

function epsilonComparison() {
	var result = Math.abs(0.2 - 0.3 + 0.1);
	return result < Number.EPSILON;
};

function returnMaxSafeInt() {
	var y = Number.MAX_SAFE_INTEGER;
	return y;
};

function isSafe (n) {
	var y = Number.MAX_SAFE_INTEGER + n;
	return Number.isSafeInteger(y);
};

function returnMaxValue (n) {
	if (n > 0 && Number.MAX_VALUE + n === Number.MAX_VALUE)
		return "Process as Infinity";
	else
		return Number.MAX_VALUE + n;
};

function returnMinSafeInt() {
	return Number.MIN_SAFE_INTEGER;
};

function returnMinValue() {
	return Number.MIN_VALUE;
};

function returnNaN() {
	return Number.NaN;
};

function returnNegativeInfinity() {
	return Number.NEGATIVE_INFINITY;
};

function returnPositiveInfinity() {
	return Number.POSITIVE_INFINITY;
};

function isFiniteMethod (arg) {
	return Number.isFinite(arg);
};

function isIntegerMethod (arg) {
	return Number.isInteger(arg);
};

module.exports = {
	returnEpsilon,
	epsilonComparison,
	returnMaxSafeInt,
	isSafe,
	returnMaxValue,
	returnMinSafeInt,
	returnMinValue,
	returnNaN,
	returnNegativeInfinity,
	returnPositiveInfinity,
	isFiniteMethod,
	isIntegerMethod
};
