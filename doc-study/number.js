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

module.exports.isSafe = (n) => {
	var y = Number.MAX_SAFE_INTEGER + n;
	return Number.isSafeInteger(y);
};

module.exports.returnMaxValue = (n) => {
	if (n > 0 && Number.MAX_VALUE + n === Number.MAX_VALUE)
		return "Process as Infinity";
	else
		return Number.MAX_VALUE + n;
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

module.exports.isFiniteMethod = (arg) => {
	return Number.isFinite(arg);
};
