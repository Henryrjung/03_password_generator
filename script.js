// Assignment Code
var generateBtn = document.querySelector("#generate");
// all characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//function to generate password
function generatePassword() {
  var passLength = prompt("Please enter a length between 8 and 128"); {
    if (passLength >= 8 && passLength <= 128) {
      alert("your password will be (" + passLength + ") letters long")
    } if (passLength < 8 || passLength > 128) {
      alert("your password does not meet the length requirements please try again");
      var passLength = prompt("Please enter a length between 8 and 128");
    }
  }
  //confirms that will pop up on clicking generate password button
  var askNum = confirm("Do you want numbers?"); 
  var askSym = confirm("Do you want symbols");
  var askUpper = confirm("do you want uppercase letters");
  var askLower = confirm("do you want lowecase letters");

  var characters = []
  // numbers
  if (askNum) {
    characters = characters.concat(numbers) 
    //symbols
  } if (askSym) {
    characters = characters.concat(symbols)  
    //uppercase 
  }  if (askUpper) {
    characters = characters.concat(upperCase)
    //lowercase
  }  if (askLower) {
    characters = characters.concat(lowerCase)

  }
  var generatedPassword = "";
  //for loop to combine selected characters
  for (var i = 0; i < passLength; i++) {
    generatedPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  return generatedPassword;
} 

