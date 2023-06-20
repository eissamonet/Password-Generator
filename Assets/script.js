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
  return "Choose valid number of characters.";
} else if (is NaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Enter a valid number.");
}
else {
  alert("Your password will be" + numericCharacters + "characters long.");
}

// 2. Validate input
// 3. Generate password based on criteria


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