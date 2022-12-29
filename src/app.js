/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let symbols = ["$", "%", "!", "=", "&"];
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
  let placeForPassword = (document.querySelector(
    ".placeForPassword"
  ).innerHTML = numbers[2]);
};
