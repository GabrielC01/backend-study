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

test('Get the minimum date of an array of dates', () => {
	function min_date(dates) {
		for (let i = 0; i < dates.length; i++) {
			dates[i] = new Date(dates[i]);
			dates[i] = Date.parse(dates[i]);
		}
		let min = new Date(Math.min(...dates));
		return min.getFullYear() + '/' + datePad((min.getMonth()+1)) + '/' + datePad(min.getDate());
	}
	expect(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])).toBe("2015/01/03");
});

test('Return the number of minutes in hours and minutes', () => {
	function timeConvert(time) {
		time = Date.parse(time);
		let minutes = (time / 1000) / 60;
		let hours = minutes / 60;
		return hours + ' hour(s) and ' + minutes + ' minute(s)';
	}
	expect(timeConvert(200))
});

test('Get the amount of days of a year', () => {
	function days_of_a_year(year) {
		let ms = Date.parse(year);
		return ((((ms) / 1000) / 60) / 60) / 24;
	}
	expect(days_of_a_year(2015));
	expect(days_of_a_year(2016));
});

test('Get the quarter of a year', () => {
	function quarter_of_the_year(date) {
		let month = date.getMonth();
		if (month < 3)
			return 1;
		else if (month < 6 && month >= 3) return 2;
		else if (month < 9 && month >= 6) return 3;
		else if (month < 12 && month >= 9) return 4;
	}
	expect(quarter_of_the_year(new Date(2015, 1, 21))).toBe(1);
	expect(quarter_of_the_year(new Date(2015, 10, 18))).toBe(4);
});

test('Count the number of days passed since the beginning of the year', () => {
	function days_passed(date) {
		let beginningOfTheYear = Date.parse(new Date(date.getFullYear(), 0));
		let passedDays = Date.parse(date);
		beginningOfTheYear = ((((beginningOfTheYear) / 1000) / 60) / 60) / 24;
		passedDays = ((((passedDays) / 1000) / 60) / 60) / 24;
		return passedDays - beginningOfTheYear + 1;
	}
	expect(days_passed(new Date(2015, 0, 15))).toBe(15);
	expect(days_passed(new Date(2015, 11, 14))).toBe(348);
});

test('Calculate age', () => {
	function calculate_age(date) {
		date = new Date(Date.parse(date)).getFullYear();
		let currDate = new Date(Date.now()).getFullYear();
		return currDate - date;
	}
	expect(calculate_age(new Date(1982, 11, 4))).toBe(40);
	expect(calculate_age(new Date(1962, 1, 1))).toBe(60);
});

test('Get the day of the month', () => {
  function day_of_the_month(date) {
    return datePad(date.getDate());
  }
  expect(day_of_the_month(new Date(2015, 10, 1))).toBe('01');
});

test('Short day name', () => {
  function short_Days(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }
  expect(short_Days(new Date(2015, 10, 1))).toBe('Sun');
});

test('Long day name', () => {
  function long_Days(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  expect(long_Days(new Date(2015, 10, 1))).toBe('Sunday');
})

test('Get ISO-8601 numeric representation of the day of the week', () => {
  function ISO_numeric_date(date) {
    return date.getDay() == 0 ? 7 : date.getDay();
  }
  expect(ISO_numeric_date(new Date(2015, 10, 1))).toBe(7);
});

test('Get English ordinal suffix for the day of the month', () => {
  function english_ordinal_suffix(date) {
    let dayNumberString = date.getDate().toString();
    let onesPlaceDigit = parseInt(dayNumberString[dayNumberString.length]);
    switch (onesPlaceDigit) {
      case 1:
        return dayNumberString + 'st';
      case 2:
        return dayNumberString + 'nd';
      case 3:
        return dayNumberString + 'rd';
      default:
        return dayNumberString + 'th';
    }
  }
  expect(english_ordinal_suffix(new Date(2015, 10, 1)));
});

test('ISO-8601 week number of year, weeks starting on Monday', () => {
  function ISO_numeric_date(date) {
    return date.getDay() == 0 ? 7 : date.getDay();
  }
  function ISO8601_week_no(date) {
    let dayInMs = Date.parse('02 Jan 1970 00:00:00 GMT');
    let currDateInMs = Date.parse(date);
    // Stating from the beginning of the year, count weeks
    let year = Date.parse(new Date(date.getFullYear(), 0));
    let weekNumber = 0;
    for (; year <= currDateInMs; year += dayInMs) {
      if (new Date(year).getDay() == 0) {
        weekNumber++; 
      }
    }
    return weekNumber;
  } 
  expect(ISO8601_week_no(new Date(2015, 10, 1))).toBe(44);
});

test('Get full textual representation of a month', () => {
  function full_month(date) {
		let months = [
			'April', 'January', 'February,	March', 'May', 'June',
      'July',	'August',	'September', 'October',	'November',	'December'
    ];
    return months[date.getMonth()-1];
  }
  expect(full_month(new Date(2015, 10, 1))).toBe('November');
});

test('Get numeric representation of a month', () => {
  function numeric_month(date) {
    return datePad(date.getMonth() + 1);
  }
  expect(numeric_month(new Date(2015, 10, 1)));
});

test('Get short textual representation of a month', () => {
  function short_months(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
  }
  expect(short_months(new Date(2015, 10, 1))).toBe('Nov');
});

test('Get full numeric representation of a year', () => {
  function full_year(date) {
    return date.getFullYear();
  }
  expect(full_year(new Date(2015, 10, 1))).toBe(2015);
});

test('Get a two digit representation of a year', () => {
  function short_year(date) {
    let numStr = String(date.getFullYear());
    return numStr[numStr.length-2] + numStr[numStr.length-1];
  }
  expect(short_year(new Date(1989, 10, 1))).toBe('89');
});

test('Get lowercase Ante meridiem and Post meridiem', () => {
  function lowercasePmAm(date) {
    return date.getHours() < 12 ? date.getHours() + 'am' : (date.getHours() - 12) + 'pm';
  }
  expect(lowercasePmAm(new Date('Wed Feb 09 2022 23:20:19 GMT-0300'))).toBe('11pm');
});
