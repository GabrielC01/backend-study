describe("Math Object", () => {
	describe("Properties", () => {

		// Euler's constant. Approximately 2.718.
		describe("E", () => {
			test("Check Euler's constant", () => {
				expect(Math.E).toBeCloseTo(2.718);
			});
		});

		// Natural log(10) (≈2.302)
		describe("LN10", () => {
			test("Check LN10", () => {
				expect(Math.LN10).toBe(2.302585092994046);
			});
		});

		// Natural log(2) (≈0.693)
		describe("LN2", () => {
			test("Check LN2", () => {
				expect(Math.LN2).toBe(0.6931471805599453);
			});
		});

		// Base 10 logarithm of e (≈0.434)
		describe("LOG10E", () => {
			test("Check LOG10E", () => {
				expect(Math.LOG10E).toBe(0.4342944819032518);
			});
		});

		// Base 2 logarithm of e (≈1.442)
		describe("LOG2E", () => {
			test("Check LOG2E", () => {
				expect(Math.LOG2E).toBe(1.4426950408889634);
			});
		});
//		describe("", () => {
//		});
	});
});
