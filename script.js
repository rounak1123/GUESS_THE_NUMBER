"use strict";
// let enteredValue = (document.querySelector(".message").textContent =
//   "Enter a VALID number!!!");
// console.log(enteredValue);
let scr = Number(document.querySelector(".score").textContent);
console.log(scr);
let hscr = 0;

let requiredValue = Math.floor(Math.random() * 10) + 1;
document.querySelector(".check").addEventListener("click", function () {
  let val1 = Number(document.querySelector(".guessBox").value);

  if (!val1) {
    document.querySelector(".message").textContent =
      "Please enter a valid input (i.e b/w 1 and 10)";
  } else if (val1 == requiredValue) {
    document.querySelector(".message").textContent =
      "YO! you FUCKED IT!!! 🎉🎉🎉 ";
    document.querySelector(".box1").textContent = requiredValue + "🎉😁😁";
    if (scr > hscr) {
      hscr = scr;

      document.querySelector(".hscore").textContent = hscr;
    }

    document.querySelector(".box1").style.backgroundImage =
      " linear-gradient(to bottom right,green , rgb(4, 78, 22), white)";
  } else if (val1 > requiredValue) {
    document.querySelector(".message").textContent =
      "The Entered Value is much high. 😢😢😭";
    scr -= 10;
    document.querySelector(".score").textContent = scr;
  } else {
    document.querySelector(".message").textContent =
      "The Entered Value is much low. 😢😢😭";
    scr -= 10;
    document.querySelector(".score").textContent = scr;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  if (scr > hscr) {
    hscr = scr;

    document.querySelector(".hscore").textContent = hscr;
  }
  scr = 100;
  requiredValue = Math.floor(Math.random() * 10) + 1;
  document.querySelector(".box1").style.background = "blue";
  document.querySelector(".score").textContent = 100;
  document.querySelector(".box1").textContent = "??";
  document.querySelector(".message").textContent = "Start GUESSING😜😜";
});
