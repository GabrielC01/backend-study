// Properties
module.exports.epsilon = () => {
	var result = Math.abs(0.2 - 0.3 + 0.1);
	return result < Number.EPSILON;
};

module.exports.safeInt = () => {
	var y = Number.MAX_SAFE_INTEGER;
	return y;
};
