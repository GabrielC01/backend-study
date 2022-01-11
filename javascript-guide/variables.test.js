const add = require('./variables.js');

test('Add two numbers', () => {
	expect(add(2, 2)).toBe(4);
});
