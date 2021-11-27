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
      //do poprawki blad z playerem 2
      !ele.classList.contains(`game__map-player-${activePlayer}`) &&
      activePlayer !== 0
    )
      ele.classList.add(`game__map-player-${activePlayer}`);
    if (checkScore(activePlayer) || activePlayer === 0) {
      activePlayer = 0;
    } else {
      if (activePlayer === 1) {
        activePlayer = 2;
      } else {
        activePlayer = 1;
      }
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

  // let z = arrWiningCombinations.some((ele) => {
  //   ele.every((element, id, tab) => {
  //     return element === arrScore[id];
  //   }) == true;
  // });

  // console.log(
  //   arrWiningCombinations.some((ele) => {
  //     ele.some((element, id, tab) => {
  //       return element === arrScore[id];
  //     }) === true;
  //   })
  // );

  let d = false;

  arrWiningCombinations.forEach((ele) => {
    let z;
    z = ele.every((element, id, tab) => {
      return element === arrScore[id];
    });
    if (z === true) {
      ele.forEach((field) => {
        mapField[field - 1].classList.add("game__map-won");
      });
      d = z;
    }
  });
  return d;
};
