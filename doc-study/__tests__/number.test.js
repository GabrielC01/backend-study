const number = require('../number');

test("Test Number.EPSILON property", () => {
	expect(number.epsilon()).toBe(true);
});
