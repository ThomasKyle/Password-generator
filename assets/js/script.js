// Assignment code here

// Array for the characters 
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64 ).concat(
        arrayFromLowToHigh(91, 96).concat(
            arrayFromLowToHigh(123, 126)
        )
    )
)

// ask them how many characters they want to use
var generatePassword = function(){
    var promptlength = window.prompt("How many characters do you want to use?");

    //validate prompt answer
    if (promptlength <= 7 || >= 128){
    window.alert("You're password is " + promptlength + " long.");
    } 
    else{
        window.alert ("You're password must be between 8 - 128 characters.");
    }

    //confrim special characters and numbers 
    var UPPERCASE_CHAR_CODES = window.confirm("Do you want to use Uppercase letters?");
    var SYMBOLS_CHAR_CODES = window.confrim ("Do you want to use Symbols?");
    var NUMBER_CHAR_CODES = window.confrim("Do you want to use Numbers?");
}

if (confrimUPPERCASE_CHAR_CODES){
passwordCharacters = passwordCharacters.concat(UPPERCASE_CHAR_CODES)
}

if (confrimSYMBOLS_CHAR_CODES){
    passwordCharacters = passwordCharacters.concat(SYMBOLS_CHAR_CODES)
}

if (confrimNUMBER_CHAR_CODES){
    passwordCharacters = passwordCharacters.concat(NUMBER_CHAR_CODES)
}

console.log(passwordCharacters)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
