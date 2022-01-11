const cond = require('../conditionals');

test("Greater number [1, 2]", () => {
	expect(cond.greaterNumber(1, 2)).toBe(2);
});

test("Greater number [3, 1]", () => {
	expect(cond.greaterNumber(3, 1)).toBe(3);
});

test("Greater number [2, 2]", () => {
	expect(cond.greaterNumber(2, 2)).toBe("Equal");
});

test("Is odd or even [7]", () => {
	expect(cond.isOdd(7)).toBe(true);
});

test("Is odd or even [4]", () => {
	expect(cond.isOdd(4)).toBe(false);
});

test("Number in full [0]", () => {
	expect(cond.numberInFull(0)).toBe("Zero");
});

test("Number in full [1]", () => {
	expect(cond.numberInFull(1)).toBe("One");
});

test("Number in full [2]", () => {
	expect(cond.numberInFull(2)).toBe("Two");
});

test("Number in full [0]", () => {
	expect(cond.numberInFull(0)).toBe("Zero");
});
