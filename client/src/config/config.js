export const strongPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\'$%\'^&\'*])(?=.{8,})');

export const wrongPasswordMessage = 'Password must contain at least: 8 characters, 1 lowercase, 1 uppercase, 1 special character. Please try again';

// **** Settings ******//

// The password string will start this way
// (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
// (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
// (?=.*[0-9])	The string must contain at least 1 numeric character
// (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
// (?=.{8,})	The string must be eight characters or longer
