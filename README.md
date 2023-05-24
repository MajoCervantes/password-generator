# Majo Password Generator

Majo Password Generator is a simple package that allows you to generate random passwords. You can customize the length of the password and the characters used in the generation.

## Install

		npm install majo-generator-password

## Usage

## Configure Strategy

The majo-generator-password strategy is constructed as follows:

    new generatePassword(length, options)

`options` The generatePassword function accepts the following optional parameters in the options object:
*chars: A string of characters to be used to generate the password. By default, alphanumeric characters and common special characters are used.
*excludeChars: An array of characters to be excluded from password generation.

`contribution` Feel free to contribute to this project! If you have any ideas, suggestions or find a bug, please create an issue or submit a pull request.

Example:

```js
const { generatePassword } = require('majo-generator-password');

// Generate a password of length 8
const password = generatePassword(8);

console.log(password);
// Example output: "yH8$6Qa!"

// Generate a password of length 12 with custom characters
const options = {
	chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

const customPassword = generatePassword(12, options);

console.log(customPassword);
// Example output: "nBxPoZGmKwXc"

// Generate a password excluding specific characters
const excludeOptions = {
	excludeChars: ['a', 'b', 'c', '1', '2', '3'],
};

const excludedPassword = generatePassword(10, excludeOptions);

console.log(excludedPassword);
// Ejemplo de salida: "H$%DxR!pY7"
```

## Lincense

This project is licensed under the MIT License. The [MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2023 Majo Cervantes

