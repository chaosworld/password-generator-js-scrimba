const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];

// console.log(characters);
let outputPasswordEl = document.querySelector("#output-password");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let lengthSliderEl = document.getElementById("length-slider");
let lengthValueEl = document.getElementById("length-value");

// console.log(lengthSliderEl);
lengthSliderEl.addEventListener("input", function () {
  lengthValueEl.value = this.value;
  // console.log("drag");
  handleGenPassClick();
});

lengthValueEl.addEventListener("input", function () {
  if (this.value > 30) {
    this.value = 30;
  }
  lengthSliderEl.value = this.value;
  // console.log("on input");
  handleGenPassClick();
});

console.log(password2El);
function getRandomChar(charArray) {
  return charArray[Math.floor(Math.random() * charArray.length)];
}
function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(characters);
  }
  return password;
}

function handleGenPassClick() {
  password1El.textContent = generatePassword(lengthSliderEl.value);
  password2El.textContent = generatePassword(lengthSliderEl.value);
  let fontSize = 16;
  if (lengthSliderEl.value < 20) {
    fontSize = 16;
  } else if (lengthSliderEl.value < 25) {
    fontSize = 14;
  } else {
    fontSize = 12;
  }
  password1El.setAttribute("style", `font-size: ${fontSize}px;`);
  password2El.setAttribute("style", `font-size: ${fontSize}px;`);
}

function copyPassowd(domEl) {
  console.log("copied " + domEl.id);
  navigator.clipboard.writeText(domEl.textContent);
  let messageEl = document.getElementById("message");
  messageEl.style = "display: block";
  setTimeout(function () {
    messageEl.style = "display: none";
  }, 3000);
}
password1El.addEventListener("click", () => copyPassowd(password1El));
password2El.addEventListener("click", () => copyPassowd(password2El));

// let password1 = generatePassword(lengthSliderEl.value);
// console.log(password1);
