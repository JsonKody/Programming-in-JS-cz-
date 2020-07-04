# Pole a Objekty

Pole a objekty jsou 'slozitejsi' nebo 'objektove' datove typy. 'Datovy typ' zni hrozne profesionalne, ale nebojte je to v podstate jenom oznaceni typu -> veci o ktere mluvime. Treba o tekutinach nebo o domech ... a z toho nam plyne co s takovymi typy muzeme delat a to je jeden z duvodu proc je rozlisujeme v programovani.

Kazdemu je jasne ze typ 'tekutina' muzeme nalit do sklenice, ale typ 'dum' ne.

Dalsim duvodem je ze 'nejde' udelat jeden typ na vsechno. Proto mame typ string kdyz chceme neco nekam napsat, nebo si treba ulozit neci jmeno. A typ number kdyz chceme neco spocitat, nebo si ulozit kolik co treba vazi.

Vime tedy ze number a string jsou tzv. primitivni datove typy a dneska si probereme nektere slozitejsi/objektove datove typy: Array (pole) a Object (objekt). 


Pozn.: obecne i v jinych jazycich ktere podporuji OOP se novy objekt vytvarit tak ze napiseme: 

```js 
new JmenoObjektu()
```

Tak muzeme v JS vytvaret jak Array ... new Array(), nebo objekt ... new Object(). V JS ale muzeme pole a objekty taky zapsat 'rovnou'/'naprimo' jako literal.


# Pole 
Pole je datovy typ ve kterem je spousta hodnot za sebou.

![zvykacky](https://www.e-cukrovinky.cz/fotky14690/fotos/_vyr_1545cukrovinky-gum-ball-16er-zvykacky-kulicky-haribo.jpg)

Muzete si to predstavit jako jedno baleni takovychto zvykacek.
Pole je tak dulezity a zakladni datovy typ ze ho najdeme napric vetsinou programovacich jazyku ale obcas s ruznymi odlisnostmi. 

Literal pole se v JS zapisuje takto:

```js
// toto by bylo prazdne pole, pole ve kterem neni ulozena zadna hodnota
// a ktere ma delku 0
[]


// toto je pole s delkou 2 ktere obsahuje dva stringy
// 1. je "ahoj"
// a
// 2. je "svete"
["ahoj", "svete"]


// pole muze obsahovat i cisla
[1, 2, 3, 42]

// pole v JS muze na rozdil od vetsiny jazyku michat ruzne typy
// i kdyz to neni zrovna dobry napad :)
[1, "ahoj", undefined, "svete", null, 42, '43']


// pole muze obsahovat i jine pole nebo dokonce objekty coz se casto velice hodi
[[1, 2, 3], [3, 5, 1], [4, 2, 8]]

// btw literal objektu se pise {}
// prosim nenechte se zmast, nemusite tomu zatim rozumet
// ale napisu sem i to jak by vypadalo pole objektu
[
    {
        jmeno: "Karel",
        prijmni: "Sičák"
        vek: 27
    },
    {
        jmeno: "Vojtech",
        prijmni: "Fisher"
        vek: 23
    }
]

```

Pokud jde o pole, je dulezite vedet ze uchovava v podstate radu/retez nejakych hodnot a ty hodnoty jsou setridene, tzn. je dulezite poradi a pole se nemuze nahodne preskladat samo od sebe. Navic si pole uchovava u kazde hodnoty tzv. 'index' ktery a ted se drzte, zacina nulou!

K hodnotam pole muzete pristupovat prave pomoci indexu tak ze napisete za pole index hodnoty ktera vas zajima a pole vam tu hodnotu 'vrati'

Ukazeme si to:

```js

let mojePole = [1, 2, 3, 4, 5]

console.log(mojePole[0])
// -> 1

console.log(mojePole[1])
// -> 2

console.log(mojePole.length)
// -> 5
```

Zkuste vymyslet jak byste vypsali posledni polozku nebo treba predposledni polozku pole nehlede na to kolik polozek v poli je.

Reseni:
```js
let zoo = ['zirafa', 'slon', 'hroch', 'dikobraz', 'tucnak', 'plamenak']

console.log( zoo[zoo.length - 1] )
// -> plamenak

console.log( zoo[zoo.length - 2] )
// -> tucnak
```

