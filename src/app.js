/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const PasswordResult = document.querySelector(".placeForPassword");
  const lengthCheckbox = document.querySelector("#length");
  const uppercaseCheckbox = document.querySelector("#uppercase");
  const lowercaseCheckbox = document.querySelector("#lowercase");
  const numbersCheckbox = document.querySelector("#numbers");
  const symbolsCheckbox = document.querySelector("#symbols");
  const btn = document.querySelector(".generateButton");
  const clipboard = document.querySelector(".clipboardEl");

  const randomFunctions = {
    number: generateRandomNumbers,
    symbol: generateRandomSymbols,
    upper: generateRandomUppercase,
    lower: generateRandomLowercase
  };
  console.log(randomFunctions);
  const handleClick = () => {
    const length = +lengthCheckbox.value;
    const hasUpper = uppercaseCheckbox.checked;
    const hasLower = lowercaseCheckbox.checked;
    const hasNumber = numbersCheckbox.checked;
    const hasSymbol = symbolsCheckbox.checked;
    PasswordResult.innerHTML = generatePassword(
      length,
      hasUpper,
      hasLower,
      hasNumber,
      hasSymbol
    );
  };
  const handleClipboard = async () => {
    const textarea = document.createElement("textarea");
    const password = PasswordResult.innerHTML;
    if (!password) {
      return;
    }
    try {
      await navigator.clipboard.writeText(password);
      alert("Password copied to the clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  clipboard.addEventListener("click", handleClipboard);
  function generatePassword(length, upper, lower, number, symbol) {
    let generatedPassword = "";
    const typesCount = upper + lower + number + symbol;
    console.log(typesCount);
    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(
      item => Object.values(item)[0]
    );
    console.log(typesArray);
    if (typesCount === 0) {
      return "";
    }
    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
        const functionName = Object.keys(type)[0];
        generatedPassword += randomFunctions[functionName]();
      });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  }
  btn.addEventListener("click", handleClick);
  function generateRandomNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let randomNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumbers];
  }
  console.log(generateRandomNumbers());
  function generateRandomSymbols() {
    let symbols = ["$", "%", "!", "=", "&", "(", ")"];
    let randomSymbols = Math.floor(Math.random() * symbols.length);
    return symbols[randomSymbols];
  }
  console.log(generateRandomSymbols());
  function generateRandomUppercase() {
    let uppercase = [
      "A",
      "V",
      "C",
      "D",
      "E",
      "B",
      "R",
      "T",
      "U",
      "M",
      "P",
      "O",
      "I",
      "Y",
      "L",
      "W",
      "Q",
      "Z",
      "X",
      "H",
      "U",
      "K",
      "G",
      "S"
    ];
    let randomUppercase = Math.floor(Math.random() * uppercase.length);
    return uppercase[randomUppercase];
  }
  console.log(generateRandomUppercase());

  function generateRandomLowercase() {
    let lowercase = [
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
      "x",
      "y",
      "z",
      "r",
      "s"
    ];
    let randomLowercase = Math.floor(Math.random() * lowercase.length);
    return lowercase[randomLowercase];
  }
  console.log(generateRandomLowercase());
};
