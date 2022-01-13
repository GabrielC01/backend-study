const number = require('../number');

describe("Number Object", () => {
	describe("Number properties", () => {

		describe("EPSILON", () => {
			test("Return EPSILON.", () => {
				expect(number.returnEpsilon()).toBe(2**-52);
			});

			test("Test EPSILON property.", () => {
				expect(number.epsilonComparison()).toBe(true);
			});
		});
		
		describe("MAX_SAFE_INTEGER", () => {
			test("Return MAX_SAFE_INTEGER value.", () => {
				expect(number.returnMaxSafeInt()).toBe(9007199254740991);
			});

			test("Try isSafeInteger() wtesth MAX_SAFE_INTEGER.", () => {
				expect(number.isSafe(0)).toBe(true);
			});

			test("Try isSafeInteger() wtesth MAX_SAFE_INTEGER + 1.", () => {
				expect(number.isSafe(1)).toBe(false);
			});
		});

		describe("MAX_VALUE", () => {
			test("Return MAX_VALUE", () => {
				expect(number.returnMaxValue(0)).toBe(1.7976931348623157e+308);
			});

			test("Add 1 to MAX_VALUE", () => {
				expect(number.returnMaxValue(10)).toBe("Process as Infinity");
			});
		});

		describe("MIN_SAFE_INTEGER", () => {
			test("Return MIN_SAFE_INTEGER", () => {
				expect(number.returnMinSafeInt()).toBe(-9007199254740991);
			});
		});

		describe("MIN_VALUE", () => {
			test("Return MIN_VALUE", () => {
				expect(number.returnMinValue()).toBe(5e-324);
			});
		});

		describe("NaN", () => {
			test("Return NaN", () => {
				expect(number.returnNaN()).toBe(NaN);
			});
		});

		describe("NEGATIVE_INFINITY", () => {
			test("Return NEGATIVE_INFINITY", () => {
				expect(number.returnNegativeInfinity()).toBe(-Infinity);
			});
		});

		describe("POSITIVE_INFINITY", () => {
			test("Return POSITIVE_INFINITY", () => {
				expect(number.returnPositiveInfinity()).toBe(Infinity);
			});
		});
	});

	describe("Number Methods", () => {
		describe("isFinite()", () => {
			test("arg: Infinity", () => {
				expect(number.isFiniteMethod(Infinity)).toBe(false);
			});

			test("arg: NaN", () => {
				expect(number.isFiniteMethod(NaN)).toBe(false);
			});

			test("arg: -Infinity", () => {
				expect(number.isFiniteMethod(-Infinity)).toBe(false);
			});

			test("arg: 0", () => {
				expect(number.isFiniteMethod(0)).toBe(true);
			});

			test("arg: 2e64", () => {
				expect(number.isFiniteMethod(2e64)).toBe(true);
			});
		});

//		describe("", () => {
//		});
	});
});
