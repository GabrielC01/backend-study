function Exception() {
	this.name = "UserException";
}

// UserException.prototype.toString = function() {
// 	return this.n
// }

module.exports.error = (number) => {
	try {
		throw new UserException("Too high number");
	} catch (e) {
		return "Error";
	}
}
