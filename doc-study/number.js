// Properties
module.exports.returnEpsilon = () => {
	return Number.EPSILON;
};

module.exports.epsilonComparison = () => {
	var result = Math.abs(0.2 - 0.3 + 0.1);
	return result < Number.EPSILON;
};

module.exports.returnMaxSafeInt = () => {
	var y = Number.MAX_SAFE_INTEGER;
	return y;
};

module.exports.isSafe = (x) => {
	var y = Number.MAX_SAFE_INTEGER + x;
	return Number.isSafeInteger(y);
};

module.exports.returnMaxValue = (x) => {
	if (x > 0 && Number.MAX_VALUE + x === Number.MAX_VALUE)
		return "Process as Infinity";
	else
		return Number.MAX_VALUE + x;
};

module.exports.returnMinSafeInt = () => {
	return Number.MIN_SAFE_INTEGER;
};

module.exports.returnMinValue = () => {
	return Number.MIN_VALUE;
};

module.exports.returnNaN = () => {
	return Number.NaN;
};

module.exports.returnNegativeInfinity = () => {
	return Number.NEGATIVE_INFINITY;
};

module.exports.returnPositiveInfinity = () => {
	return Number.POSITIVE_INFINITY;
};
