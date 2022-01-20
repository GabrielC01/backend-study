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
		describe("abs(n)", () => {
			test("arg: -3", () => {
				expect(Math.abs(-3)).toBe(3);
			});
		});

		// Arccosine (in radians)
		describe("acos(n)", () => {
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
		describe("acosh(n)", () => {
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
		describe("asin(n)", () => {
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
		describe("asinh(n)", () => {
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
		describe("atan(n)", () => {
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
		describe("atan2(x, y)", () => {
			test("args: 90,15", () => {
				expect(Math.atan2(90, 15)).toBe(1.4056476493802699);
			});
			test("args: 15, 90", () => {
				expect(Math.atan2(15, 90)).toBe(0.16514867741462683);
			});
			test("args: 10, 10", () => {
				expect(Math.atan2(10, 10)).toBe(0.7853981633974483);
			});
		});

		// Returns the hyperbolic arctagent of a number
		describe("atanh(n)", () => {
			test("arg: -2", () => {
				expect(Math.atanh(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.atanh(-1)).toBe(-Infinity);
			});
			test("arg: 0", () => {
				expect(Math.atanh(0)).toBe(0);
			});
			test("arg: 0.5", () => {
				expect(Math.atanh(0.5)).toBe(0.5493061443340548);
			});
			test("arg: 1", () => {
				expect(Math.atanh(1)).toBe(Infinity);
			});
			test("arg: 2", () => {
				expect(Math.atanh(2)).toBe(NaN);
			});
		});

		// Returns the cubic root of a number
		describe("cbrt(n)", () => {
			test("arg: NaN", () => {
				expect(Math.cbrt(NaN)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.cbrt(-1)).toBe(-1);
			});
			test("arg: -0", () => {
				expect(Math.cbrt(-0)).toBe(-0);
			});
			test("arg: -Infinity", () => {
				expect(Math.cbrt(-Infinity)).toBe(-Infinity);
			});
			test("arg: 0", () => {
				expect(Math.cbrt(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.cbrt(1)).toBe(1);
			});
			test("arg: Infinity", () => {
				expect(Math.cbrt(Infinity)).toBe(Infinity);
			});
			test("arg: null", () => {
				expect(Math.cbrt(null)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.cbrt(2)).toBe(1.2599210498948732);
			});
			test("arg: 9", () => {
				expect(Math.cbrt(27)).toBe(3);
			});
		});

		// Returns the smallest integer greater than or equal to the given number
		describe("ceil(n)", () => {
			test("arg: 0.95", () => {
				expect(Math.ceil(.95)).toBe(1);
			});
			test("arg: 4", () => {
				expect(Math.ceil(4)).toBe(4);
			});
			test("arg: 7.004", () => {
				expect(Math.ceil(7.004)).toBe(8);
			});
			test("arg: -0.95", () => {
				expect(Math.ceil(-.95)).toBe(-0);
			});
			test("arg: -4", () => {
				expect(Math.ceil(-4)).toBe(-4);
			});
			test("arg: -7.004", () => {
				expect(Math.ceil(-7.004)).toBe(-7);
			});
		});

		// Returns the number of leading zero bits in the 32 bit representation of the given number
		describe("clz32(n)", () => {
			test("arg: 1", () => {
				// 1
				expect(Math.clz32(1)).toBe(31);
			});
			test("arg: 4", () => {
				// 100
				expect(Math.clz32(4)).toBe(29);
			});
			test("arg: 7", () => {
				// 111
				expect(Math.clz32(7)).toBe(29);
			});
		});

		// Returns the cosine of the given number (in radians)
		describe("cos(n)", () => {
			test("arg: 0", () => {
				expect(Math.cos(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.cos(1)).toBe(0.5403023058681398);
			});
			test("arg: Math.PI", () => {
				expect(Math.cos(Math.PI)).toBe(-1);
			});
			test("arg: 2 * Math.PI", () => {
				expect(Math.cos(2 * Math.PI)).toBe(1);
			});
		});

		// Returns the hyperbolic cosine of a number
		describe("cosh(n)", () => {
			test("arg: 0", () => {
				expect(Math.cosh(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.cosh(1)).toBe(1.5430806348152437);
			});
			test("arg: -1", () => {
				expect(Math.cosh(-1)).toBe(1.5430806348152437);
			});
			test("arg: 2", () => {
				expect(Math.cosh(2)).toBe(3.7621956910836314);
			});
		});

		// Returns the result of e constant raised to the power of the given number
		describe("exp(n)", () => {
			test("arg: -1", () => {
				expect(Math.exp(-1)).toBe(0.36787944117144233);
			});
			test("arg: 0", () => {
				expect(Math.exp(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.exp(1)).toBe(2.718281828459045);
			});
		});

		// Returns e^x - 1
		describe("expm1(n)", () => {
			test("arg: 0", () => {
				expect(Math.expm1(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.expm1(1)).toBe(1.718281828459045);
			});
			test("arg: -1", () => {
				expect(Math.expm1(-1)).toBe(-0.6321205588285577);
			});
			test("arg: 2", () => {
				expect(Math.expm1(2)).toBe(6.38905609893065);
			});
		});

		// Floor of a floating number
		describe("floor(n)", () => {
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
		describe("fround(n)", () => {
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
		describe("hypot(a, b)", () => {
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

		// Returns the natural logarithm of a number
		describe("log(n)", () => {
			test("arg: -1", () => {
				expect(Math.log(-1)).toBe(NaN);
			});
			test("arg: 0", () => {
				expect(Math.log(0)).toBe(-Infinity);
			});
			test("arg: 1", () => {
				expect(Math.log(1)).toBe(0);
			});
			test("arg: 10)", () => {
				expect(Math.log(10)).toBe(2.302585092994046);
			});
		});

		// Returns the base 10 logarithm of a number
		describe("log10(n)", () => {
			test("arg: 2", () => {
				expect(Math.log10(2)).toBe(0.3010299956639812);
			});
			test("arg: 1", () => {
				expect(Math.log10(1)).toBe(0);
			});
			test("arg: -2", () => {
				expect(Math.log10(-2)).toBe(NaN);
			});
			test("arg: 100000", () => {
				expect(Math.log10(100000)).toBe(5);
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
