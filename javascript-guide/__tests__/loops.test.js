const loops = require('../loops');

test("Count to five (for)", () => {
	expect(loops.countToFive()).toBe("1 2 3 4 5 ");
});

test("Count to five (while)", () => {
	expect(loops.countToFive1()).toBe("1 2 3 4 5 ");
});

test("Count to five (for while)", () => {
	expect(loops.countToFive2()).toBe("1 2 3 4 5 ");
});
