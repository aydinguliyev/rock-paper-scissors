const playerChoise = document.querySelectorAll(".playerChoise");
const plyNumber = document.querySelector(".plyNumber");
const oppNumber = document.querySelector(".oppNumber");
const playerName = document.querySelectorAll(".name");
const oppChoise1 = document.getElementById("oppChoise1");
const oppChoise2 = document.getElementById("oppChoise2");
const oppChoise3 = document.getElementById("oppChoise3");
const statusPlayer = document.querySelector(".statusPlayer");

const enterName = prompt("Enter Your Name");
playerName[1].innerHTML = enterName;

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let opponent = 0;
let player = 0;

const playGame = (e) => {
  const opp = getRandomInt(3, 1);
  const ply = Number(e?.srcElement?.alt);
  opponentChoise(opp);

  if (ply === opp) {
    statusPlayer.innerHTML = "BƏRABƏR";
  } else if (ply === 1 && opp === 2) {
    player++;
    statusPlayer.innerHTML = "SƏN QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 1 && opp === 3) {
    opponent++;
    statusPlayer.innerHTML = "RƏQİB QAZANDI";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 2 && opp === 1) {
    player++;
    statusPlayer.innerHTML = "SƏN QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 2 && opp === 3) {
    opponent++;
    statusPlayer.innerHTML = "RƏQİB QAZANDI";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 3 && opp === 2) {
    player++;
    statusPlayer.innerHTML = "SƏN QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 3 && opp === 1) {
    opponent++;
    statusPlayer.innerHTML = "RƏQİB QAZANDI";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  }
};

const opponentChoise = (nmr) => {
  if (nmr === 1) {
    oppChoise1?.classList?.add("active");
    oppChoise2?.classList?.remove("active");
    oppChoise3?.classList?.remove("active");
  } else if (nmr === 2) {
    oppChoise1?.classList?.remove("active");
    oppChoise2?.classList?.add("active");
    oppChoise3?.classList?.remove("active");
    console.log(oppChoise2);
  } else if (nmr === 3) {
    console.log(oppChoise1);
    oppChoise1?.classList?.remove("active");
    oppChoise2?.classList?.remove("active");
    oppChoise3?.classList?.add("active");
  }
};

for (i = 0; i < 3; i++) {
  playerChoise[i].addEventListener("click", playGame);
}
