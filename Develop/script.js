// Assignment code here

var generatePassword = function() {
  // Character length between 8 and 128 characters
  var characterLength = function(lengthSelected) {
    var lengthSelected = window.prompt("How long would you like your password to be? Please choose a character length between 8 and 128.");
    while (lengthSelected < 8 && lengthSelected > 128) {
      var characterLength = window.prompt("Character length must be between 8 and 128.");
    
      if (length >= 8 && length <= 128){
        characterLength = lengthSelected;
        console.log(lengthSelected)
        break;
      }
    }
  }
};

var characterTypes = function () {
    var typesPrompt = window.prompt(
      "Would you like to include LOWERCASE characters, UPPERCASE characters, NUMERIC characters, or SPECIAL characters? Please select one option from the following: 'LOWERCASE', 'UPPERCASE', 'NUMERIC', or 'SPECIAL'."
    );

    switch (typesPrompt) {
      case 'LOWERCASE':
      case 'lowercase':
        characterTypes.lowercase();
        break;

      case 'UPPERCASE':
      case 'uppercase':
        characterTypes.uppercase();
        break;

      case 'NUMERIC':
      case 'numeric':
        characterTypes.numeric();
        break;

      case 'SPECIAL':
      case 'special':
        characterTypes.special();
        break;

      default:
        window.alert('You did not pick a valid option. Try again.');

      typesPrompt();
      break;
    }
}


generatePassword(characterLength, characterTypes)
  return characterLength + characterTypes;

  // Character types options to include or exclude (lowercase, uppercase, numeric, special characters)

  //var characterTypes =


  //var characterTypes = window.prompt("Are lowercase characters okay?")
  //var characterTypes = window.prompt("Are uppercase characters okay?")
  //var characterTypes = window.prompt("Are numeric characters okay? Could include '0123456789'")
  //var characterTypes = window.prompt("Are special characters okay? Could include ' !#$%&'()*+,-./:;<=>?@[\]^_`{|}~'")




// will return password randomly created

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
