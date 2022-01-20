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

		// Arccosine (in radians)
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

		// Hiperbolic arccosine
		describe("acosh()", () => {
			test("arg: -1", () => {
				expect(Math.acosh(-1)).toBe(NaN);
			});
			test("arg: 0", () => {
				expect(Math.acosh(0)).toBe(NaN);
			});
			test("arg: 1", () => {
				expect(Math.acosh(1)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.acosh(2)).toBe(1.3169578969248166);
			});
		});

		// Arcsine (in radians)
		describe("asin()", () => {
			test("arg: -2", () => {
				expect(Math.asin(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.asin(-1)).toBe(- Math.PI / 2);
			});
			test("arg: 0", () => {
				expect(Math.asin(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.asin(1)).toBe(Math.PI / 2);
			});
			test("arg: 2", () => {
				expect(Math.asin(2)).toBe(NaN);
			});
		});


		// Hiperbolic arcsine
		describe("asinh()", () => {
			test("arg: 1", () => {
				expect(Math.asinh(1)).toBe(0.881373587019543);
			});
			test("arg: 0", () => {
				expect(Math.asinh(0)).toBe(0);
			});
			test("arg: -1", () => {
				expect(Math.asinh(-1)).toBe(-0.881373587019543);
			});
			test("arg: 2", () => {
				expect(Math.asinh(2)).toBe(1.4436354751788103);
			});
		});

		// Arctangent (radians)
		describe("atan()", () => {
			test("arg: 1", () => {
				expect(Math.atan(1)).toBe(0.7853981633974483);
			});
			test("arg: 0", () => {
				expect(Math.atan(0)).toBe(0);
			});
			test("arg: -0", () => {
				expect(Math.atan(-0)).toBe(-0);
			});
			test("arg: Infinity", () => {
				expect(Math.atan(Infinity)).toBe(1.5707963267948966);
			});
			test("arg: Infinity", () => {
				expect(Math.atan(-Infinity)).toBe(-1.5707963267948966);
			});
			test("arg: 8 / 10", () => {
				expect(Math.atan(8 / 10)).toBe(0.6747409422235527);
			});
			test("arg: 5 / 3", () => {
				expect(Math.atan(5 / 3)).toBe(1.0303768265243125);
			});
		});

		// Returns the angle of a point
		describe("atan2()", () => {
			test("arg: 90,15", () => {
				expect(Math.atan2(90, 15)).toBe(1.4056476493802699);
			});
			test("arg: 15, 90", () => {
				expect(Math.atan2(15, 90)).toBe(0.16514867741462683);
			});
			test("arg: 10, 10", () => {
				expect(Math.atan2(10, 10)).toBe(0.7853981633974483);
			});
		});

		// Floor of a floating number
		describe("floor()", () => {
			test("arg: 1.2", () => {
				expect(Math.floor(1.2)).toBe(1);
			});
			test("arg: 2.3", () => {
				expect(Math.floor(2.3)).toBe(2);
			});
			test("arg: 3.4", () => {
				expect(Math.floor(3.4)).toBe(3);
			});
		});

		// Returns the nearest 32-bit single precision float representation of a Number
		describe("fround()", () => {
			test("arg: 5.5", () => {
				expect(Math.fround(5.5)).toBe(5.5);
			});
			test("arg: 5.05", () => {
				expect(Math.fround(5.05)).toBe(5.050000190734863);
			});
			test("arg: 5", () => {
				expect(Math.fround(5)).toBe(5);
			});
		});

		// Returns the square root of the sum of the squares of the arguments
		describe("hypot()", () => {
			test("args: 3, 4", () => {
				expect(Math.hypot(3, 4)).toBe(5);
			});
			test("args: 9, 12", () => {
				expect(Math.hypot(9, 12)).toBe(15);
			});
			test("arg: -5", () => {
				expect(Math.hypot(5)).toBe(5);
			});
		});

		// Returns the C-like product of the two parameters
		describe("imul(a, b)", () => {
			test("args: 3, 4", () => {
				expect(Math.imul(3, 4)).toBe(12);
			});
			test("args: -5, 12", () => {
				expect(Math.imul(-5, 12)).toBe(-60);
			});
			test("args: 0xffffffff, 5", () => {
				expect(Math.imul(0xffffffff, 5)).toBe(-5);
			});
		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
//		describe("", () => {
//		});
	});
});
