# Logika


## ... ale jeste predtim ...

## Prazdne hodnoty/typy:
```js
undefined

null
```

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
Uff, tak a muzeme se vrhnout na tu slibenou logiku. V programovani je to jeden z nejdulezitejsich konceptu. Vychazi z matematiky, konkretne z Booleovy algebry.
Pozn.: casto se na skolach uci tzv. Vyrokova logika

![George Boole](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/George_Boole_color.jpg/225px-George_Boole_color.jpg)
***George Boole*** [wikipedia](https://cs.wikipedia.org/wiki/George_Boole)
*byl britský matematik a filosof, známý jako objevitel základů moderní aritmetiky, nazvané později Booleovou algebrou. Je díky tomu považován za zakladatele informatiky, ačkoli v jeho době nebylo o počítačích ani uvažováno.*


![JS bool](https://benmccormick.org/static/6d15c0e5ac4df9209df25439414c2043/288d5/boolean-mappings.png)

![Booleova algebra](https://slideplayer.cz/slide/2583158/9/images/1/Booleova+logika%28algebra%29.jpg)


```js
let a = 0
let b = 0

a && b // -> false
a || b // -> false
//------------------

a = 0
b = 1

a && b // -> false
a || b // -> true
//------------------

a = 1
b = 0

a && b // -> false
a || b // -> true
//------------------

a = 1
b = 1

a && b // -> true
a || b // -> true
```

Vzorecky:
```js
!(a && b) = !a || !b
!a && !b = !(a || b)
```