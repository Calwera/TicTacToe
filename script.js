"use strict";

const mapField = document.querySelectorAll(".game__map-field");
const map = document.querySelector(".game__map");
const player = document.querySelectorAll(".game__score-player");
const button = document.querySelectorAll(".btn");

let activePlayer = 1;
const arrWiningCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

mapField.forEach((field) => {
  field.addEventListener("click", function () {
    if (
      !field.classList.contains(`game__map-player-1`) &&
      !field.classList.contains(`game__map-player-2`) &&
      activePlayer !== 0
    ) {
      field.classList.add(`game__map-player-${activePlayer}`);
      if (checkScore(activePlayer) || activePlayer === 0) {
        activePlayer = 0;
      } else {
        if (activePlayer === 1) {
          activePlayer = 2;
          player.forEach((e) => e.classList.toggle("player-active"));
        } else {
          activePlayer = 1;
          player.forEach((e) => e.classList.toggle("player-active"));
        }
      }
    }
  });
});

const checkScore = function (player) {
  let arrScore = []; //temporary array of checked player fields

  mapField.forEach((ele, id) => {
    if (ele.classList.contains(`game__map-player-${player}`)) {
      arrScore.push(id + 1);
    }
  });

  let conditionToWin = false;

  arrWiningCombinations.forEach((ele) => {
    //checking if player has won
    if (
      ele.every((element, id, tab) => {
        if (arrScore.length > 3) {
          return (
            element === arrScore[id + 1] ||
            element === arrScore[id] ||
            element === arrScore[id + 2]
          );
        }
        return element === arrScore[id];
      })
    ) {
      ele.forEach((field) => {
        //Checked player won
        mapField[field - 1].classList.add("game__map-won");
      });

      if (player === 1) button[1].style.display = "block";
      if (player === 2) button[0].style.display = "block";

      conditionToWin = true;
    }
  });
  return conditionToWin;
};

const startState = function () {
  button.forEach((btn) => (btn.style.display = "none"));
  activePlayer = 1;
  mapField.forEach((field) => {
    field.classList.remove("game__map-player-1");
    field.classList.remove("game__map-player-2");
    field.classList.remove("game__map-won");
  });
};
button.forEach((btn) => btn.addEventListener("click", startState));
