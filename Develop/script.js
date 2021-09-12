  // Character length between 8 and 128 characters
  function characterLength() {
    var lengthSelected = window.prompt("How long would you like your password to be? Please choose a character length between 8 and 128.");

    // Incorrect response from user
    if (lengthSelected < 8 || lengthSelected > 128) {
      window.alert("Character length must be between 8 and 128.");
      characterLength()
    }
      // Correct response from user
    else {
        characterLength = lengthSelected;
        window.alert("Great! Let's move on to the other questions.");
    }
    return lengthSelected;
  }

function characterTypes() {
  var character = "";
    // possible password values
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "'!#$%&'()*+,-./:;<=>?@";

  if (window.confirm("Would you like to include lowercase characters in your password? Password could include 'abcdefghijklmnopqrstuvwxyz'.")) {
    character += lowercase
  };

  if (window.confirm("Would you like to include uppercase characters in your password? Password could include 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.")) {
    character += uppercase
  };

  if (window.confirm("Would you like to include numeric characters in your password? Password could include '0123456789'.")) {
    character += numeric
  };

  if (window.confirm("Would you like to include special characters in your password? Password could include '0123456789'.")) {
    character += special
  };

  return character
}


function generatePassword() {
      var characterCount = characterLength();
      var characterChoice = characterTypes();

      var password = "";
    // randomly generate password characters
    for (var i = 0;  i <= characterCount; i++) {
      password += characterChoice.charAt(Math.floor(Math.random() * Math.floor(characterChoice.length - 1)));
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





// if (window.confirm("Do you really want to leave?")) {
//  window.open("exit.html", "Thanks for Visiting!");
//}
/*
  var lowercaseYes = window.confirm("Would you like to include lowercase characters in your password? Password could include 'abcdefghijklmnopqrstuvwxyz'.");
  var uppercaseYes = window.confirm("Would you like to include uppercase characters in your password? Password could include 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.");
  var numericYes = window.confirm("Would you like to include numeric characters in your password? Password could include '0123456789'.");
  var specialYes = window.confirm("Would you like to include special characters in your password? Password could include '0123456789'.");

  // possible password values
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "'!#$%&'()*+,-./:;<=>?@";

  var character = "";

  if (lowercaseYes) {
    character += lowercase
  }
  if (uppercaseYes) {
    character += uppercase
  }
  if (numericYes) {
    character += numeric
  }
  if (specialYes){
    character += special
  }
  */
  //generatePassword()