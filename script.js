"use strict";

const mapField = document.querySelectorAll(".game__map-field");
const map = document.querySelector(".game__map");

let activePlayer = 1;
const arrWiningCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

mapField.forEach((ele) => {
  ele.addEventListener("click", function () {
    if (
      !(
        ele.classList.contains("game__map-player-1") ||
        ele.classList.contains("game__map-player-2")
      )
    )
      if (activePlayer == 1) {
        ele.classList.add("game__map-player-1");
        checkScore(1);
        activePlayer = 2;
      } else {
        ele.classList.add("game__map-player-2");
        checkScore(2);
        activePlayer = 1;
      }
  });
});

const checkScore = function (player) {
  let arrScore = [];

  mapField.forEach((ele, id) => {
    if (ele.classList.contains(`game__map-player-${player}`)) {
      arrScore.push(id + 1);
    }
  });
  let z;

  arrWiningCombinations.forEach((ele) => {
    z = ele.every((element, id, tab) => {
      return element === arrScore[id];
    });
    if (z === true) {
      ele.forEach((field) => {
        mapField[field - 1].classList.add("game__map-won");
      });
      mapField.forEach((ele) => {
        ele.removeQue;
      });
      mapField.forEach((ele) => {
        ele.removeEventListeners();
        // ele.classList.remove(`game__map-player-${player}`);
        // ele.classList.remove("game__map-won");
        // arrScore = [];
      });
    }
  });
};
