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

test('Return the month name of a particular date', () => {
	function month_name(date) {
		let dates = {
			January: 0,
			February: 1,
			March: 2,
			April: 3,
			May: 4,
			June: 5,
			July: 6,
			August: 7,
			September: 8,
			October: 9,
			November: 10,
			December: 11
		};
		for (let prop in dates) {
			if (date.getMonth() == dates[prop])
				return prop;
		}
	}
	expect(month_name(new Date("10/11/2009"))).toBe('October');
	expect(month_name(new Date("11/13/2014"))).toBe('November');
});

test('Compare dates', () => {
	function compare_dates(date1, date2) {
		date1 = Date.parse(date1);
		date2 = Date.parse(date2);
		if (date1 == date2) return "Date1 = Date2";
		if (date1 > date2) return "Date1 > Date2";
		if (date1 < date2) return "Date2 > Date1";
	}

	expect(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))).toBe("Date1 = Date2");
	expect(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))).toBe("Date1 > Date2");
	expect(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))).toBe("Date2 > Date1");
});

test('Add specified minutes to a date object', () => {
	function add_minutes(date, minutes) {
		date.setMinutes(minutes);
		return date;
	}
	expect(add_minutes(new Date(2014,10,2), 30).getMinutes()).toBe(30);
});

test('Test wheter a date is a weekend', () => {
	function is_weekend(date) {
		date = new Date(date);
		return date.getDay() > 4 || date.getDay() == 0 ? 'weekend' : undefined;
	}

	expect(is_weekend('Nov 15, 2014')).toBe('weekend');
	expect(is_weekend('Nov 16, 2014')).toBe('weekend');
	expect(is_weekend('Nov 17, 2014')).toBe(undefined);
});

test('Get the difference between two dates in days', () => {
	function date_diff_indays(date1, date2) {
		date1 = Date.parse(date1);
		date2 = Date.parse(date2);
		return ((((date2 - date1) / 1000) / 60) / 60) / 24;
	}
	expect(date_diff_indays('04/02/2014', '11/04/2014')).toBe(216);
	expect(date_diff_indays('12/02/2014', '11/04/2014')).toBe(-28);
});

test('Get the last day of a month', () => {
	function lastday(year, month) {
		if (month == 1) return year % 4 == 0 ? 29 : 28;
		else if ([0, 2, 4, 6, 7, 9, 11].indexOf(month) > -1) return 31;
		else return 30;
	}
	expect(lastday(2014,0)).toBe(31);
	expect(lastday(2014,1)).toBe(28);
	expect(lastday(2014,11)).toBe(31);
});

test('Calculate yesterday day', () => {
	function yesterday(date) {
		date = new Date(date);
		date.setDate(date.getDate() - 1);
		return date;
	}
	expect(yesterday('Nov 15, 2014').getDate()).toBe(14);
	expect(yesterday('Nov 16, 2015').getDate()).toBe(15);
	expect(yesterday('Nov 17, 2016').getDate()).toBe(16);
});

test('Get the maximum date of an array of dates', () => {
	function max_date(dates) {
		for (let i = 0; i < dates.length; i++) {
			dates[i] = new Date(dates[i]);
			dates[i] = Date.parse(dates[i]);
		}
		let max = new Date(Math.max(...dates));
		return max.getFullYear() + '/' + datePad((max.getMonth()+1)) + '/' + datePad(max.getDate());
	}
	expect(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])).toBe("2015/02/02");
});
