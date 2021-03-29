const input = document.getElementById("input");
const button = document.getElementById("button");
const odpoved = document.getElementById("odpoved");
const zprava = document.getElementById("zprava");

const livesElement = document.getElementById("lives");
const deathsElement = document.getElementById("deaths");

const MAX_LIVES = 10
const BAD_COLOR = "#ff5cbe"
const NEUTRAL_COLOR = "#c4b5fd"
const GOOD_COLOR = "#52ffb7"
let lives = MAX_LIVES
generateLives()

function generateLives() {
    if(lives <= 0) {
        livesElement.textContent = '💀'
        livesElement.classList.add("text-4xl")
        deathsElement.textContent = ''
        return
    }

    const hearths = Array(lives).fill('❤️')
    livesElement.textContent = hearths.join('')
    const deaths = Array(MAX_LIVES - lives).fill('🖤')
    deathsElement.textContent = deaths.join('')
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

// hlida zmacknuti Enteru
addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        porovnejCisla();
    }
});

function porovnejCisla() {
    let tip = parseInt(input.value)
    input.value = ''
    input.focus()



    try {
        tip = tip.toNumber
    } catch(err) {
        zprava.style.color = BAD_COLOR;
        zprava.textContent = "Zadávej prosím pouze čísla.";
    }



    console.log(`
    input: ${tip}
    nahodneCislo: ${nahodneCislo}`);

    if (tip == nahodneCislo) {
        // alert("spraaavne")
        zprava.style.color = GOOD_COLOR;
        zprava.textContent = "Výborně, vyhrál jsi 👍\nMůžeš hrát znovu 😄";
        nahodneCislo = vygenerujNahodneCislo();
        lives = MAX_LIVES
        generateLives()
    } else {
        lives -= 1
        generateLives()
        zprava.style.color = BAD_COLOR;
        if(tip < nahodneCislo) {
            zprava.textContent = `${tip} .. trochu přidej ☝️`;
        } else {
            zprava.textContent = `${tip} .. trochu uber   👇`;
        }
        // alert("spatne .. zkus to znovu")
    }

    odpoved.textContent = nahodneCislo
}
