const add = require('./addTwoNumbers');
const strToInt = require('./strToInt');

test('Add two numbers', () => {
	expect(add(2, 2)).toBe(4);
});

test('Convert string to decimal integer', () => {
	expect(strToInt('10', 10)).toBe(10);
});
