const number = require('../number');

describe("Number Object", () => {
	describe("Number properties", () => {
		test("Test Number.EPSILON property", () => {
			expect(number.epsilon()).toBe(true);
		});
		
		test("Test MAX_SAFE_INTEGER", () => {
			expect(number.safeInt()).toBe(9007199254740991);
		});
	});
});
