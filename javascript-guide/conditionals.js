// If/else statement
module.exports.greaterNumber = (a, b) => {
	if (a > b) return a;
	else if (a == b) return "Equal";
	else return b;
}

module.exports.isOdd = (a) => {
	if (a % 2 != 0) return true;
	else return false;
}

// Switch statement
module.exports.numberInFull = (number) => {
	switch (number) {
		case 0:
			return "Zero";
		case 1:
			return "One";
		case 2:
			return "Two";
	}
}
