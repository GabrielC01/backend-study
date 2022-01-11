const greet = require('../helloworld.js');

test('Greet', () => {
	expect(greet('world')).toBe('Hello, world');
});
