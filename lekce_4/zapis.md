## Priklad z minuleho dilu
```javascript
// promenna a = 3, b = 8
// zkuste jejich hodnoty prohodit bez toho abyste je primo napsali cislo

let a = 3
let b = 8

let c

c = a // sem si 'schovame' hodnotu z 'a'
a = b
b = c // .. a pak ji ulozime do 'b'


console.log(`a: ${ a }`)
console.log(`b: ${ b }`)
```


# if podminka
If podminky jsou jednim ze zakladnich stavebnich kamenu v podstate kazdeho programovaciho jazyka .. v anglictine se jedna o tzv. "control flow statements" protoze patri mezi prikazy, 'vetvi' beh programu.

![If podminka](https://www.happyprogrammingguide.com/wp-content/uploads/2018/09/python-if-statements.jpg)
![If else podminka](https://images.slideplayer.com/16/4996476/slides/slide_3.jpg)


Priklad if podminky:

```javascript
// if podminku zapisujeme takto

if("podminka") {
    // blok kodu
}

// takze napriklad
let penize = 2000

if(penize >= 12) {
    console.log("Hurá mám na tatranku!")
}
```


V podstate si teda muzeme if podminku rozdelit na tri casti:
- keyword/klicove slovo 'if'
- zavorky kam piseme podminku, tzn. v zavorkach ocekava JS nejakou hodnotu boolean
- slozene zavorky {} .. tomu rikame blok kodu a jeste si k nemu neco rekneme


```javascript
// zkusime si napsat program, ktery zjisti 
// kam patrime na zaklade naseho veku

let vek = 12

if(vek < 6) {
    console.log("Chodis do skolky.")
}
if(vek <= 15) {
    console.log("Chodis do zakladni skoly.")
}
if(vek > 15) {
    console.log("Chodis do prace nebo na vysokou skolu.")
}
```

verze 2
```javascript
// zkusime si napsat program, ktery zjisti 
// kam patrime na zaklade naseho veku

let vek = 12

if(vek < 6) {
    console.log("Chodis do skolky.")
}
if(vek >= 6 && vek <= 15) {
    console.log("Chodis do zakladni skoly.")
}
if(vek > 15) {
    console.log("Chodis do prace nebo na vysokou skolu.")
}
```

# if-else
If-else je zpusob zapisu if podminky kdy se urcite neco provede. Budto se provede kod v podmince jinak se provede kod v 'else'.

```javascript
let pohlavi = "zena"

if(pohlavi == "muz") {
    console.log("Vážený pane ...")
} else {
    console.log("Vážená paní ...")
}
```

# if-else-if
Pokud chceme zretezit vice podminek za sebe tak aby se provedla jen jedna z nich.

```javascript
let cas = 15

if(cas < 10) {
    console.log("Dobre rano")
} else if (cas < 20) {
    console.log("Dobry den")
} else {
    console.log("Dobry vecer")
}
```


zamyslete se jaky je rozdil meszi if -> if -> if a treba if -> else if -> else if -> else

```javascript
if("podminka") {
    // kod
} else if("podminka") {
    // kod
} else if("podminka") {
    // kod
} else {
    // kod
}

// oproti

if("podminka") {
    // kod
}

if("podminka") {
    // kod
}

if("podminka") {
    // kod
} 

if("podminka") {
    // kod
} 
```

# Poznamka ohledne stylu
Mozna jste si vsimli ze kod pisi urcitym zpusobem, konzistentne (porad stejne) nekde vzdy davam mezeru, nekde novy radek a rikate si jestli je to potreba. Ano i ne. Neni to potreba (krome jazyka Python) aby kod fungoval jak ma, ale je to potreba abyste se v kodu vyznali vy a ostatni lide. 

Tomu jak spravne formatovat kod nekdo rika 'stabni kultura' a je to soubor pravidel jak co zapisovat na kterych se dohodli programatori uz hodne davno, aby mohli spolecne pracovat na ruznych projektech a vyznali se v tom.

Nasledujici kod funguje uplne stejne jako kod z posledniho prikladu,
ale prase aby se v tom ... :)

```javascript
if("podminka"){// kod
}if("podminka"){/*kod*/}if("podminka"){/*kod*/}if("podminka"){// kod
} 
```

Napr. i 'camelCase' je soucasti stabni kultury a pokud vas zajima jestli jsou jen jedny pravidla jak vse psat tak ne :D
Bohuzel je jich docela dost ruznych, casto podle jazyka nekde prevazilo to, nekde ono a tak se do dnesnich casu vedou svate valky jak co zapisovat. Ale celkove vzato jsou ty odlistnosti pomerne nicotne, v zakladu je to vse vicemene stejne jak vam ten kod ukazuji.

A jeste na konec: kazdy znak tedy i mezera nebo 'novy radek' se musi zapsat tudiz zabira misto v kodu, tudiz zabira misto na disku a zvetsuje program. V praxi tedy velmi casto dochazi k tomu ze se kod, jeste pred spustenim "projede" a vymazou se vsechny zbytecne znaky, mezery, nove radky, prazdne radky, komentare, nekdy se i dlouha jmena promennych nahradi treba jednim pismenkem apod. tzv. minifikace a dale se pracuje s takovym kodem.


# Nove funkce alert() & prompt()

Funkce alert('zprava')
otevere vyskakovaci okno v prohlizeci a zobrazi zpravu

Funkce prompt()
vyhodi vyskakovaci okenko s inputem a pripadne otazkou.
Nasledne vrati string ktery uzivatel zapsal. Kdyz nic nezapsal,
vrati proste prazdny string.

```javascript
let pocetPismen = prompt("Napis neco, cokoliv:")

alert(`Zadali jste ${ pocetPismen.length } pismen.`)
```

Funkce si zatim muzete predstavit jako takove kouzlo z HP.
Staci ho zapsat a pripadne mu predat nejaky argument a ona neco udela. 
Zanedlouho si rekneme jak vytvaret vlastni kouzla, teda funkce.


# Cyklus while()
Pocitace jsou mnohem lepsi nez lide v rychlem zpracovavani obrovskeho mnozstvi dat, protoze jde casto o hodne repetitivni cinnost je dulezite abysme mohli pocitaci rict "delej tohle porad dokola dokud ..."

Proto programatori vymysleli cykly. Mozna jste nekdy slysely slovo "iterace". Ja teda ne nez jsem zacal programovat, kazdopadne ted to pro vas bude uplne normalni slovo. Znamena totiz "opakovat" a je v programovani velmi bezne.

My si zatim vysvetlime jen jeden cyklus a to cyklus while().

```js
while(true) {
    let pocetPismen = prompt("Napis neco, cokoliv:")

    alert(`Zadali jste ${ pocetPismen.length } pismen.`)
}
```
