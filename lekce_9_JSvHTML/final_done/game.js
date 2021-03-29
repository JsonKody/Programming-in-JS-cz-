const gameControlWindow = document.getElementById("gameControlWindow");
const startButton = document.getElementById("startButton");
const endMessage = document.getElementById("endMessage");
const difficultyElement = document.getElementById("difficulty");

const easyButton = document.getElementById("easyButton");
const normalButton = document.getElementById("normalButton");
const hardButton = document.getElementById("hardButton");

const input = document.getElementById("input");
const button = document.getElementById("button");
const odpoved = document.getElementById("odpoved");
const zprava = document.getElementById("zprava");

const livesElement = document.getElementById("lives");
const deathsElement = document.getElementById("deaths");

const BAD_COLOR = "#ff5cbe";
const NEUTRAL_COLOR = "#c4b5fd";
const WIN_COLOR = "#00ffad";
const DEAD_COLOR = "#fb3333";

const diffs = {
  easy: { text: "Easy", lives: 10 },
  normal: { text: "Normal", lives: 7 },
  hard: { text: "Hard", lives: 4 },
};

let difficulty = diffs.normal;

let MAX_LIVES = 10;
let lives;
startGame();

function startGame() {
  MAX_LIVES = difficulty.lives;
  difficultyElement.textContent = difficulty.text;
  lives = MAX_LIVES;
  livesElement.classList.remove("text-5xl");
  generateLives();
  zprava.style.color = NEUTRAL_COLOR;
  zprava.textContent = "Uhodni číslo ... 1-100";
  hide(startButton);
  hide(endMessage);
  show(gameControlWindow);
}

generateLives();
// 🎉
function generateLives() {
  if (lives <= 0) {
    livesElement.textContent = "💀";
    livesElement.classList.add("text-5xl");
    deathsElement.textContent = "";
    endMessage.style.color = DEAD_COLOR;
    endMessage.textContent = "To je zlé .. jsi mrkev 🥕";
    show(endMessage);
    show(startButton);
    hide(gameControlWindow);
    return;
  }

  const hearths = Array(lives).fill("❤️");
  livesElement.textContent = hearths.join("");
  const deaths = Array(MAX_LIVES - lives).fill("🖤");
  deathsElement.textContent = deaths.join("");
}

let nahodneCislo = vygenerujNahodneCislo();

// funkce: generuje nahodneCislo 1-100
function vygenerujNahodneCislo() {
  return Math.floor(Math.random() * 100 + 1);
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
  if (lives <= 0) {
    startGame();
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

  console.log(`
    input: ${tip}
    nahodneCislo: ${nahodneCislo}`);

  if (tip == nahodneCislo) {
    livesElement.textContent = "🎉";
    livesElement.classList.add("text-5xl");
    deathsElement.textContent = "";
    endMessage.style.color = WIN_COLOR;
    endMessage.textContent = "Výborně, vyhrál jsi 👍\nMůžeš hrát znovu 😄";
    show(endMessage);
    show(startButton);
    hide(gameControlWindow);
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
