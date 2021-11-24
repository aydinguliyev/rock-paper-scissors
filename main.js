const playerChoise = document.querySelectorAll(".playerChoise");
const plyNumber = document.querySelector(".plyNumber");
const oppNumber = document.querySelector(".oppNumber");
const playerName = document.querySelectorAll(".name");
const oppChoise1 = document.getElementById("oppChoise1");
const oppChoise2 = document.getElementById("oppChoise2");
const oppChoise3 = document.getElementById("oppChoise3");
const statusPlayer = document.querySelector(".statusPlayer");
const game = document.querySelector(".game");

const enterName = prompt("Enter Your Name");
enterName === ""
  ? (playerName[1].innerHTML = "Player")
  : (playerName[1].innerHTML = enterName);

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let opponent = 0;
let player = 0;
let ties = 0;

const playGame = (e) => {
  const opp = getRandomInt(3, 1);
  const ply = Number(e?.srcElement?.alt);
  opponentChoise(opp);
  if (e?.srcElement?.alt) {
    ties++;
    game.innerHTML = `oyun: ${ties}`;
  }

  if (ply === opp) {
    statusPlayer.innerHTML = "BƏRABƏR";
  } else if (ply === 1 && opp === 2) {
    player++;
    statusPlayer.innerHTML = "QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 1 && opp === 3) {
    opponent++;
    statusPlayer.innerHTML = "UDUZDUN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 2 && opp === 1) {
    player++;
    statusPlayer.innerHTML = "QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 2 && opp === 3) {
    opponent++;
    statusPlayer.innerHTML = "UDUZDUN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 3 && opp === 2) {
    player++;
    statusPlayer.innerHTML = "QAZANDIN";
    plyNumber.innerHTML = player;
    oppNumber.innerHTML = opponent;
  } else if (ply === 3 && opp === 1) {
    opponent++;
    statusPlayer.innerHTML = "UDUZDUN";
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
  } else if (nmr === 3) {
    oppChoise1?.classList?.remove("active");
    oppChoise2?.classList?.remove("active");
    oppChoise3?.classList?.add("active");
  }
};

for (i = 0; i < 3; i++) {
  playerChoise[i].addEventListener("click", playGame);
}
