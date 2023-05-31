/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*function restorePage () {
  location.reload ();
 }*/

window.onload = () => {
  cardGenerator();
};

function cardGenerator() {
  setInterval(() => {
    location.reload();
  }, 10000);

  const suites = ["♦", "♥", "♠", "♣"];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const topSuiteElement = document.querySelector(".top-suite");
  const numberElement = document.querySelector(".number");
  const bottomSuiteElement = document.querySelector(".bottom-suite");

  const randomSuites = suites[Math.floor(Math.random() * suites.length)];
  const randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];

  topSuiteElement.innerHTML = randomSuites;
  numberElement.innerHTML = randomNumbers;
  bottomSuiteElement.innerHTML = randomSuites;

  if (randomSuites === "♥" || randomSuites === "♦") {
    topSuiteElement.classList.add("red");
    numberElement.classList.add("red");
    bottomSuiteElement.classList.add("red");
  }
}

let timeleft = 10;
const downloadTimer = setInterval(function() {
  timeleft--;
  document.getElementById("countdowntimer").textContent = timeleft;
  if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);
