// Assignment code here

//Arrays for the password generator
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//varible decleration

var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacter;
var confirmNumber;

var passwordCharacters = [];

//generate password function
var generatePassword = function() {
    //password Length
    var passwordLength = window.prompt("How long do you want your password to be? It must be between 8 and 128 characters.");
    console.log(passwordLength);
    while (passwordLength <=7 || passwordLength >= 129){
        window.alert("Your password must be between 8 and 128 charcters!");
        generatePassword();
        break;
    }
    
    window.alert("Your password is " + passwordLength + " long!"); 

    passwordParameters();

    randomPassword();

     writePassword();

};

//password parameters 
var passwordParameters = function(){
var confirmLowerCase = window.confirm("Would you like to use Lower cases?");
var confirmUpperCase = window.confirm("Would you like to use Upper cases?");
var confirmSpecialCharacter = window.confirm("Would you like to use Special characters?");
var confirmNumber = window.confirm("would you like to use Numbers?");

while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialCharacter === false && confirmNumber === false){
    window.alert("You muust choose at least one Parameter.")

passwordParameters();
 }

 if (confirmLowerCase){
     passwordCharacters = passwordCharacters.concat (lowerCase);
 }

 if (confirmUpperCase){
    passwordCharacters = passwordCharacters.concat(upperCase);
 }

if (confirmSpecialCharacter){
     passwordCharacters = passwordCharacters.concat(specialCharacter);
 }

 if (confirmNumber){
     passwordCharacters = passwordCharacters.concat(number);
 }

 console.log(passwordCharacters);
 
 return randomPassword;

};

var randomPassword = function(){
    var randomPassword = "";

    for (i = 0; i < passwordLength; i++){
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
       console.log(randomPassword);
       
       return randomPassword;
    }
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