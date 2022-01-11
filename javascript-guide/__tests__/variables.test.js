import addTwoNumbers from '../variables';

jest.mock(addTwoNumbers);

test('Add two numbers', () => {
	expect(variables(2, 2)).toBe(4);
});

// test('Convert string to decimal integer', () => {
// 	expect(strToInt('10', 10)).toBe(10);
// });
