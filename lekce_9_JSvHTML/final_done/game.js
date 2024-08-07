const gameControlWindow = document.getElementById("gameControlWindow");
const startButton = document.getElementById("startButton");
const endMessage = document.getElementById("endMessage");
const difficultyElement = document.getElementById("difficulty");

let isEnd = false;

const easyButton = document.getElementById("easyButton");
const normalButton = document.getElementById("normalButton");
const hardButton = document.getElementById("hardButton");

const input = document.getElementById("input");
const button = document.getElementById("button");
const odpoved = document.getElementById("odpoved");
const zprava = document.getElementById("zprava");

const liveDisplay = document.getElementById("lives");

const BAD_COLOR = "#ff5cbe";
const NEUTRAL_COLOR = "#c4b5fd";
const WIN_COLOR = "#00ffad";
const DEAD_COLOR = "#fb3333";

const MIN_NUM = 1;
const MAX_NUM = 100;

const diffs = {
  easy: { text: "Easy", lives: 10, element: "easyButton" },
  normal: { text: "Normal", lives: 7, element: "normalButton" },
  hard: { text: "Hard", lives: 5, element: "hardButton" },
};

let difficulty = diffs.normal;

let nahodneCislo;
let MAX_LIVES = 10;
let lives;
startGame();

function startGame() {
  isEnd = false;
  bodyColor();
  nahodneCislo = vygenerujNahodneCislo(MIN_NUM, MAX_NUM);
  easyButton.classList.add("opacity-30");
  normalButton.classList.add("opacity-30");
  hardButton.classList.add("opacity-30");

  eval(`${difficulty.element}.classList.remove("opacity-30")`);

  MAX_LIVES = difficulty.lives;
  difficultyElement.textContent = difficulty.text;
  lives = MAX_LIVES;
  liveDisplay.classList.remove("text-5xl");
  generateLives();
  zprava.style.color = NEUTRAL_COLOR;
  hide(startButton);
  hide(endMessage);
  show(gameControlWindow);
  input.focus();
  zprava.textContent = `Uhodni číslo ... ${MIN_NUM}-${MAX_NUM}`;
}

// funkce: generuje nahodneCislo 1-100
function vygenerujNahodneCislo(min, max) {
  const cislo = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Náhodné číslo: ${cislo}`);
  return cislo;
}

// hlida zmacknuti buttonu
button.addEventListener("click", function (e) {
  porovnejCisla();
});

startButton.addEventListener("click", function (e) {
  startGame();
});

easyButton.addEventListener("click", function (e) {
  difficulty = diffs.easy;
  startGame();
});
normalButton.addEventListener("click", function (e) {
  difficulty = diffs.normal;
  startGame();
});
hardButton.addEventListener("click", function (e) {
  difficulty = diffs.hard;
  startGame();
});

// hlida zmacknuti Enteru
addEventListener("keyup", function (e) {
  if (isEnd) {
    startGame();
    return;
  }
  if (e.keyCode === 13) {
    porovnejCisla();
  }
});

function porovnejCisla() {
  let tip = parseInt(input.value);
  input.value = "";
  input.focus();

  if (!tip) {
    zprava.style.color = NEUTRAL_COLOR;
    zprava.textContent = "Zadávej prosím pouze čísla.";
    return;
  }

  if (tip < MIN_NUM || tip > MAX_NUM) {
    zprava.style.color = NEUTRAL_COLOR;
    zprava.textContent = `Hádej pouze čísla mezi ${MIN_NUM}-${MAX_NUM}`;
    return;
  }

  if (tip == nahodneCislo) {
    setWinState();
  } else {
    lives -= 1;
    generateLives();
    zprava.style.color = BAD_COLOR;
    if (tip < nahodneCislo) {
      zprava.textContent = `${tip} .. trochu přidej ☝️`;
    } else {
      zprava.textContent = `${tip} .. trochu uber   👇`;
    }
    // alert("spatne .. zkus to znovu")
  }

  odpoved.textContent = nahodneCislo;
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function bodyColor() {
  if (isEnd) {
    if (lives) {
      // vyhra
      document.querySelector("body").style.background = "#5c25b5";
    } else {
      // prohra
      document.querySelector("body").style.background = "#16072d";
    }
  } else {
    // default
    document.querySelector("body").style.background = "#3c1a73";
  }
}

function generateLives() {
  if (lives <= 0) {
    setDeadState();
    return;
  }

  hearts = "";

  for (let i = 0; i < MAX_LIVES; i++) {
    if (i < lives) {
      hearts += "❤️";
    } else {
      hearts += "🖤";
    }
  }

  liveDisplay.textContent = hearts;
}

function setDeadState() {
  isEnd = true;
  liveDisplay.textContent = "💀";
  liveDisplay.classList.add("text-5xl");
  endMessage.style.color = DEAD_COLOR;
  endMessage.textContent = "To je zlé .. jsi mrkev 🥕";
  show(endMessage);
  show(startButton);
  hide(gameControlWindow);
  bodyColor();
}

function setWinState() {
  isEnd = true;
  liveDisplay.textContent = "🎉";
  liveDisplay.classList.add("text-5xl");
  endMessage.style.color = WIN_COLOR;
  endMessage.textContent = "Výborně, vyhrál jsi 👍";
  show(endMessage);
  show(startButton);
  hide(gameControlWindow);
  bodyColor();
}
