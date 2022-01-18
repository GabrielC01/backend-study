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

		// π constant
		describe("PI", () => {
			test("Check PI", () => {
				expect(Math.PI).toBe(3.141592653589793);
			});
			test("Calculate the area of a circle (radius = 7)", () => {
				let circleArea = Math.PI * 7**2;
				expect(circleArea).toBe(153.93804002589985);
			});
		});

		// Square root of 1/2
		describe("SQRT1_2", () => {
			test("Check SQRT1_2", () => {
				expect(Math.SQRT1_2).toBe(0.7071067811865476);
			});
		});

		// Square root of 2
		describe("SQRT2", () => {
			test("Check SQRT2", () => {
				expect(Math.SQRT2).toBe(1.4142135623730951);
			});
		});

	});

	// Methods
	describe("Methods", () => {
		// Absolute value of a number
		describe("abs()", () => {
			test("arg: -3", () => {
				expect(Math.abs(-3)).toBe(3);
			});
		});

		describe("acos()", () => {
			test("arg: -2", () => {
				expect(Math.acos(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.acos(-1)).toBe(3.141592653589793);
			});
			test("arg: 0", () => {
				expect(Math.acos(-0)).toBe(1.5707963267948966);
			});
			test("arg: 1", () => {
				expect(Math.acos(1)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.acos(2)).toBe(NaN);
			});
		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
	});
});
