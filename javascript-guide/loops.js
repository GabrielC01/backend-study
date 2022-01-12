module.exports.countToFive = () => {
	var str = "";
	for (let i = 1; i <= 5; i++) {
		str += i + " ";
	}
	return str;
};

module.exports.countToFive1 = () => {
	var str = "";
	var i = 0;
	while (i <= 5) {
		i++
		str += i + " ";
	}
	return str;
};

module.exports.countToFive2 = () => {
	var str = "";
	var i = 0;
	do {
		i++;
		str += i + " ";
	} while (i <= 5);
};
