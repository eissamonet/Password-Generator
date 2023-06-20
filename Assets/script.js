// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("hey");
  // Array of password options/characters
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W","X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "<", ":", ">", "/", "?", "~", ";"];

// 1. Prompt the user for the password criteria
//   a. password length 8-128 characters
//   b. lowercase, uppercase, numbers, special characters
numberOfCharacters = prompt("Choose between 8-128 characters for your password.");
if (numericCharacters < 8 || numericCharacters > 128) {
  return "Choose a valid number of characters.";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Enter a valid number.");
}
// Validate password options
hasUppercase = confirm("Do you want uppercase characters?");
if (hasUppercase) {
  alert("Your password will have uppercase characters.");
}
else {
  alert("Your password will NOT have uppercase.");
}

hasLowercase = confirm("Do you want lowercase characters?");
if (hasLowercase) {
  alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}

hasSpecial = confirm("Do you want special characters?");
if (hasSpecial) {
  alert("Your password will have special characters.");
}
else {
  alert("Your password will NOT have special characters.");
}

hasNumbers = confirm("Do you want numbers?");
if (hasNumbers) {
  alert("Your password will have numbers.");
}
else {
  alert("Your password will NOT have numbers");
}

// 2. Validate input
if (hasLowercase === false && hasNumbers === false && hasSpecial === false && hasUppercase === false) {
  return "Select at least one character type.";
}
// 3. Generate password based on criteria
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
}
if (hasLowerercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
}
if (hasSpecial) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
}


var finalPassword = ""
for (var i = 0; i < numberOfCharacters; i++) {
  var rng = [Math.floor(Math.random() * possibleCharacters.length)];
}

// 4. display password on the page
  return "Generated password will go here!";
}


 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);