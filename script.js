var special = [
  "#",
  "!",
  "]",
  "+",
  ")",
  "*",
  "=",
  "(",
  "}",
  "{",
  "[",
  "&",
  "$",
  "~",
  "}",
  ")",
  "~",
  "%",
  "+",
  "!",
  "<",
  "/",
  ">",
  ":",
  ";",
  "?",
  "`",
  "@",
  "^",
  "_",
  "-",
  "\\",
  ",",
  ".",
  "'",
  "|",
];
console.log(special);

var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(num);

var min = "pyfgcrlaoeuidhtnsqjkxbmwvz".split("");
console.log(min);

var up = "PYFGCRLAOEUIDHTNSQJKXBMWVZ".split("");
console.log(up);

var includeNum;
var includeMin;
var includeUp;
var includeSpecial;

function getPasswordOptions() {
  var length = parseInt(
    prompt(
      "How many characters (between 8 and 128) do you want in your password?"
    )
  );

  if (Number.isNaN(length)) {
    getPasswordOptions();
  }

  if (length < 8 || length > 128) {
    getPasswordOptions();
  }

  includeNum = confirm("Do you want numbers?");
  includeMin = confirm("Do you want lowercase letters?");
  includeUp = confirm("Do you want uppercase letters?");
  includeSpecial = confirm("Do you want special characters?");

  if (!includeMin && !includeSpecial && !includeNum && !includeUp) {
    alert("You need to choose at least one option.");
    getPasswordOptions();
  }

  var features = {
    length: length,
    includeMin: includeMin,
    includeNum: includeNum,
    includeSpecial: includeSpecial,
    includeUp: includeUp,
  };

  return features;
}

function randomizer(arr) {
  var rIndex = Math.floor(Math.random() * arr.length);
  var rElement = arr[rIndex];

  return rElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var selections = [];
  var atLeast = [];

  if (options.includeMin) {
    selections = selections.concat(min);
    atLeast.push(randomizer(min));
  }

  if (options.includeNum) {
    selections = selections.concat(num);
    atLeast.push(randomizer(num));
  }

  if (options.includeSpecial) {
    selections = selections.concat(special);
    atLeast.push(randomizer(special));
  }

  if (options.includeUp) {
    selections = selections.concat(up);
    atLeast.push(randomizer(up));
  }

  for (var i = 0; i < options.length; i++) {
    var selectedChar = randomizer(selections);
    result.push(selectedChar);
  }

  for (var i = 0; i < atLeast.length; i++) {
    result[i] = atLeast[i];
  }

  return result.join("");
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
