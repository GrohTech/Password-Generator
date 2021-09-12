// Assignment code here




  // Character length between 8 and 128 characters
  function characterLength() {
    var lengthSelected = window.prompt("How long would you like your password to be? Please choose a character length between 8 and 128.");

    // Incorrect response from user
    if (lengthSelected < 8 || lengthSelected > 128) {
      var characterLength = window.prompt("Character length must be between 8 and 128.");
    }
      // Correct response from user
    else {
        characterLength = lengthSelected;
        window.alert("Great! Let's move on to the other questions.");
    }
    return characterLength;
  }

function characterTypes() {
  window.alert("Please use the checkboxes below to select which characters to include in your password.");

  // possible password values
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "'!#$%&'()*+,-./:;<=>?@";

  var lowercaseChecked = document.querySelector("#lowercase")
  var uppercaseChecked = document.querySelector("#uppercase")
  var numericChecked = document.querySelector("#numeric")
  var specialChecked = document.querySelector("#special")
  var character = "";

  if (lowercaseChecked.checked) {
    character += lowercase
  }
  if (uppercaseChecked.checked) {
    character += uppercase
  }
  if (numericChecked.checked) {
    character += numeric
  }
  if (specialChecked.checked){
    character += special
  }
  return characterTypes
  //generatePassword()
}



function generatePassword() {
      var characterCount = characterLength();
      var characterChoice = characterTypes();

      var password = "";
    // randomly generate password characters
    for (var i = 0;  i <= characterCount; i++) {
      password += characterChoice.charAt(Math.floor(Math.random() * (characterChoice.length - 1)));
  }
    // will return password randomly created
    return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //add value to password
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
