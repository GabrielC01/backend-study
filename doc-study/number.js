module.exports.epsilon = () => {
	const result = Math.abs(0.2 - 0.3 + 0.1);
	return result < Number.EPSILON;
};
