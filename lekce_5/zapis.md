# Logika


## ... ale jeste predtim ...

## Prazdne hodnoty/typy:
- undefined
- null

<img src="https://i1.wp.com/artdepartmental.com/wp-content/uploads/2099/07/Forrest-Gump-0296.jpg?fit=1014%2C419&ssl=1" width="500">

V minule lekci jsme meli nasledujici program:
```js
// Program, ktery se donekonecna pta a ukazuje pocet pismen inputu uziv.
while(true) {
    let pocetPismen = prompt("Napis neco, cokoliv:")

    alert(`Zadali jste ${ pocetPismen.length } pismen.`)
}
```

Zapomel jsem ze funkce prompt muze take vratit hodnotu null pokud uzivatel klikne na 'cancel'. V dalsim prikazu tedy vznikne bug kdyz se snazim sjistit length of null.

![Dijkstra](https://www.azquotes.com/picture-quotes/quote-if-debugging-is-the-process-of-removing-software-bugs-then-programming-must-be-the-process-edsger-dijkstra-56-19-97.jpg)

*Holandsky matematik a informatik. Znamy treba diky 'Dijkstrovu algoritmu' ktery hleda nejkratsi cestu v grafu. Kamarad mi rikal, ze Sapkowski po nem pojmenoval spiona Dijkstru ze sve sagy o Zaklinaci. Nevim jestli je to pravda, kazdopadne je to zajimave.*


## dodatek k typy Number
Pokud chcete dopodrobna chapat jak tento typ funguje, vydalo by to na nekolik samostatnych lekci. Nam postaci vedet ze (stejne jako vetsina ciselnych typu ve vsech programovasich jazycich) cisla jsou omezena.
Je urcite nejmensi a nejvetsi cislo, ktere muzeme zapsat. Take pocet desetinnych cisel je omezeny cca. na patnact s tim ze pri prevodu do pocitace, ktery vlastne interne pracuje s binarni soustavou muzou vznikat podivne bugy. Nemeli byste se tedy u desetinnych cisel spolehat na presnou hodnotu, ale spise porovnavat 'mensi' nebo 'vetsi'.

Typ number muze take nabyvat nekolika zvlastnich hodnot:
- -0, +0
- -infinity, +infinity
- NaN (not a number)

NaN ma takovou zvlastnost a sice ze NaN != NaN

## 'typeof'
'typeof' je dalsi ***unarni*** operator (ano operator, i kdyz se vetsina operatoru pise znakem, treb '+' jsou i operatory zapsane slovem)

Pouziti:
```js
typeof "orloj"
// -> "string"

typeof 4
// -> "number"

typeof true
// -> "boolean"

typeof undefined
// -> "undefined"

typeof null
// -> "object"
```


# Logika!
Uff, tak a muzeme se vrhnout na tu slibenou logiku. V programovani je to jeden z nejdulezitejsich konceptu. Vychazi z matematiky, konkretne z 