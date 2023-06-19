// Assignment Code
// Array of password options
function generatePassword(){
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W","X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeriCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "<", ":", ">", "/", "?", "~", ";"]
}

// Ask user for their input
numberOfCharacters = prompt("Choose between 8-128 characters for your password.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "Choose a valid number of characters.";

  // check valid character length
} else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Enter a valid number.");
  }

  else {
    window.alert("Your password will be" + numberOfCharacters + "characters long.");
  }
// LowerCase options
hasLowercase = confirm("Click OK to confirm including lowercase characters");
if (hasLowercase) {
  alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}

// UpperCase options





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);