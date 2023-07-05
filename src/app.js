import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suitList = ["♣", "♦", "♥", "♠"];
  const redElements = ["♦", "♥"];
  const numbersList = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  generateCard(suitList, numbersList, redElements);
};

const selectRandomItem = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateCard = (suitList, numbersList, redElements) => {
  const selectedSuit = selectRandomItem(suitList);
  const selectedNumbersList = selectRandomItem(numbersList);

  const numberDomElement = document.getElementById("card-number");
  numberDomElement.textContent = selectedNumbersList;

  const isRed = redElements.includes(selectedSuit);

  const suitDomElements = document.querySelectorAll(".card-suit");

  suitDomElements.forEach(elem => {
    elem.textContent = selectedSuit;
    elem.style.color = isRed ? "red" : "black";
  });
};
