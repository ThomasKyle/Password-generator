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

//varible declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confrimNumberCharacter;
var confrimLowerCase;confrimUpperCase;
var confrimUpperCase;


function arrayFromLowToHigh(low, high){
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}
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