const crypto = require('crypto');

function generatePassword(lenght = 10, options = {}) {
	const chars =
		options.chars ||
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
	const charset = Array.from(chars);
	const password = [];
	const { excludeChars } = options;

	for (let i = 0; i < lenght; i++) {
		let randomChar;

		do {
			randomChar =
				charset[Math.floor((crypto.randomBytes(1)[0] / 255) * charset.length)];
		} while (excludeChars && excludeChars.includes(randomChar));

		password.push(randomChar);
	}
	return password.join('');
}

module.exports = {
	generatePassword,
};
