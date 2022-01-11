const err = require('../error');

test("Test error handling", () => {
	expect(err.error()).toBe("Error");
});
