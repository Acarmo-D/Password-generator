// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var specials = "!@#$%^&*()_+{}|[];:<>?/";

var generatePassword = function() {
  //ask series of questions to see waht kind of passwrod to make
  var length = parseInt(prompt("How long does the password need to be?"));

  while (isNaN(length) || length > 128 || length < 8) {
    alert("you really messed up!");
    length = parseInt(prompt("How long does the password need to be?"));
  };

  var wantUppers = confirm("Do you want Uppers?");
  var wantLowers = confirm("Do you want Lowers?");
  var wantNumbers = confirm("Do you want Numbers?");
  var wantSpecials = confirm("Do you want Specials?");
  
  //make password - return
  var possibilites = "";
  if (wantUppers) {
    possibilites += uppers;
  };
  if (wantLowers) {
    possibilites += lowers;
  };
  if (wantNumbers) {
    possibilites += numbers;
  };
  if (wantSpecials) {
    possibilites += specials;
  };

  console.log(possibilites);

  var password = "";

  for (i = 0; i < length; i++) {
    //find a random number with in passibility index
    var randNum = Math.floor(Math.random() * possibilites.length);
    // get the random letter from the possibilties
    var randLet = possibilites[randNum];
    //add to password
    password += randLet;
  }

  return password;
};

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
