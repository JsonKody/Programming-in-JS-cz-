const input = document.getElementById("input");
const button = document.getElementById("button");
const odpoved = document.getElementById("odpoved");
const zprava = document.getElementById("zprava");

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
    console.log(`
    input: ${input.value}
    nahodneCislo: ${nahodneCislo}`);

    if (input.value == nahodneCislo) {
        // alert("spraaavne")
        zprava.textContent = "spraaavne";
        zprava.style.color = "green";
        nahodneCislo = vygenerujNahodneCislo();
    } else {
        zprava.textContent = "spatne .. zkus to znovu";
        zprava.style.color = "red";
        // alert("spatne .. zkus to znovu")
    }

    odpoved.textContent = nahodneCislo
}
