const { generatePassword } = require('../src/index');

describe('generatePassword', () => {
	it('should generate a password of the specifien length', () => {
		const lenght = 10;
		const password = generatePassword(lenght);

		expect(password).toHaveLength(lenght);
	});

	it('should generate a paswword with default character set', () => {
		const password = generatePassword();

		expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()-_=+]+$/);
	});

	it('should generate a password excluding specified characters', () => {
		const lenght = 8;
		const excludeChars = ['a', 'b', 'c'];
		const password = generatePassword(lenght, { excludeChars });

		expect(password).toHaveLength(lenght);
		expect(password).not.toMatch(/[abc]/);
	});
});
