// Utilities
function datePad(number) {
	if (number < 10)
		return  '0' + number;
}

// Exercises
test('Check if input is a date object', () => {
	function isDate(input) {
		return input instanceof Date;
	}
	expect(isDate("October 13, 2014 11:13:00")).toBeFalsy();
	expect(isDate(new Date(86400000))).toBeTruthy();
	expect(isDate(new Date(99, 5, 24, 11, 33, 30, 0))).toBeTruthy();
	expect(isDate([1, 2, 4, 0])).toBeFalsy();
});

test('Return the current date', () => {
	function curday(sep) {
		let cur = new Date();
		return '' + (cur.getMonth() + 1) + sep + cur.getDate() + sep + cur.getYear();
	}
	expect(/\d+\/\d+\/\d+/.test(curday('/'))).toBeTruthy();
});

test('Return the number of days in a month', () => {
	function getDaysInMonth(monthIndex, year) {
		let date = new Date(year, monthIndex-1);
		date.setDate(30);
		if (date.getMonth() > monthIndex-1)
			return year % 4 == 0 ? 29 : 28;
		date.setDate(31);
		return date.getMonth() > monthIndex-1 ? 30 : 31;
	}

	expect(getDaysInMonth(1, 2012)).toBe(31);
	expect(getDaysInMonth(2, 2012)).toBe(29);
	expect(getDaysInMonth(9, 2012)).toBe(30);
	expect(getDaysInMonth(12, 2012)).toBe(31);
});
