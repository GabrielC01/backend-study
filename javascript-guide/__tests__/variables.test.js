const variables = require('../variables');


test('Add two numbers', () => {
	expect(variables.addTwoNumbers(2, 2)).toBe(4);
});

test('Convert string to decimal integer', () => {
	expect(variables.strToInt('10', 10)).toBe(10);
});

test('Convert string to decimal float', () => {
	expect(variables.strToFloat('10', 10)).toBe(10);
});

test('Variable scope test', () => {
	expect(variables.scopeError()).toBe("Scope error");
});
