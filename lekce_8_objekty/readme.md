# Objekt

U vystvetlovani objektu zacnu rovnou kodem protoze myslim, ze tak myslenku objektu pochopite snaze nez kdybych o nich zdlouhave mluvil.

```js
// literal objektu ze zapisuje takto
{}

// .. toto je prazdny objekt

// Usporadani dat v objektu je podobna jako v Mape, tzn.
// <klic, hodnota>
// napr.:
{
    jmeno: "Mrakoplaš"
}

// tento objekt uz neni, prazdny. Ma jeden klic a ten ma hodnotu
```

***Objekt*** muzeme ulozit treba do nejake promenne a pak s nim dale pracovat, napr. ptat se ho na hodnoty klicu nebo mu treba nejake nove vlastnosti **\<klic, hodnota\>** pridat.

```js
let mrakoplas = {
    jmeno: "Mrakoplas",
    vek: 38,
    povolani: "mag",
    bydliste: "Ankh-Morpork",
    popis: "Ačkoliv neumí téměř vůbec kouzlit, má několik akademických titulů z Neviditelné Univerzity"
}

// pokud chceme z takoveho objektu ziskat treba vek staci napsat
console.log( mrakoplas.vek )
// -> 38

// hodnotu muzeme samozrejmne take menit:
mrakoplas.vek = 42


// pokud chceme pridat nejakou novou vlastnost je to stejne jako
// bychom menili stavajici vlastnost, jen napiseme nejakou novou
mrakoplas.oblibeneJidlo = "brambory"

// hodnoty objektu nemusi byt jen primitivni typy jako 'cislo' nebo 'string'. Jako hodnotu muzeme zadat jakykoliv typ JS vcetne objektovych. Muzete teda narazit na objekt ktery ma 'v sobe' dalsi objekty, pole a funkce. Vlastne je to velmi bezne.

mrakoplas.zavazadlo = {
    veci: ["ponozky", "lzice", "mesec", "lampa"]
}


// takze nas objekt mrakoplas se malinko rozrostl od doby co jsme si ho poprve nadefinovali
// Ted vypada nejak takto:

{
    jmeno: "Mrakoplas",
    vek: 42,
    povolani: "mag",
    bydliste: "Ankh-Morpork",
    popis: "Ačkoliv neumí téměř vůbec kouzlit, má několik akademických titulů z Neviditelné Univerzity",
    oblibeneJidlo: "brambory",
    zavazadlo: {
        veci: ["ponozky", "lzice", "mesec", "lampa"]
    }
}
```


# Metody
***Metody*** jsou vlastne ***funkce***. Pokud nejakou funkci zapiseme jako vlastnost nejakeho objektu rikame ji metoda. Nic vic.

Zkusime pridat Mrakoplasovi nejakou metodu:

```js
mrakoplas.mumlej = function() {
    console.log("„No nazdar, no nazdar.“")
}   

// ukazeme si jak bysme takovou funkci mohli zapsat rovnou v literalu

let clovek = {
    jmeno: "Tomas",
    pozdrav: function() {
        console.log("Ahooooj")
    }
}

clovek.pozdrav() 
// -> Ahooooj

// metoda se da take zapsat 'nove' zkracene/zjednodusene proste takto

let clovek2 = {
    jmeno: "Michal",
    pozdrav() {
        console.log("Cau :) ")
    }
}

clovek2.pozdrav()
// -> Cau :)
```

# this
Slovicko ***this*** je pro mnohe jedno z nejvice matoucich v celem JS, zakladni myslenka je ale strasne jednoducha.

***this*** 'ukazuje' na objekt ktery 'vlastni' danou funkci.
To se nam hodi pokud v te funkci potrebujeme nejakou dalsi vlastnost daneho objektu. 

Ukazka: 

```js
// spatne!
let neclovek1 = {
    jmeno: "Patejl",
    predstaveni() {
        let s = `Dobry den, jmenuji se ${ neclovek1.jmeno }.`

        console.log(s)
    }
}

// s pouzitim THIS
let neclovek2 = {
    jmeno: "Patejl",
    predstaveni() {
        let s = `Dobry den, jmenuji se ${ this.jmeno }.`

        console.log(s)
    }
}

neclovek2.predstaveni()
// -> Dobry den, jmenuji se Patejl.
```


# Druhy zpusob pristupu k vlastnostem objektu

... je "bracket notation", cesky asi hranatozavorkova notace :)

```js
// pokud mame takovyto objekt:
let pes = {
    jmeno: "Penny",
    vek: 5
}

// muzeme zjisti jmeno napsanim:
pes.jmeno
// -> Penny

// ale mame jeste druhy zpusob zapisu
pes["jmeno"]
// -> Penny
```
Na prvni pohled je prvni zapis jednodussi a celkove lepsi. Je pravda ze po vetsinu casu budete pouzivat prvni zapis kvuli jeho jednoduchosti, ale neni pravda ze by byl lepsi. Vlastne je to tak ze druhy zpusob zapisu je mnohem mocnejsi.

Vsimnete si ze ve druhem zapisu piseme do zavorek jen ***string*** ktery ma odpovidat ***klici*** objektu.

A stringy muzeme ruzne menit a celkove 'programovat' zatimco prvni zapis je jasny. Programator si musi sednout a napsat napevno klic.



# Auto

Zkusime si na konec vytvorit auto, ktere bude jezdit a tankovat.

```js

let auto = {
    znacka: "BMW",
    nadrz: 100,
    spotrebaNa100: 7,
    jed(km) {
        if(km / 100 * this.spotrebaNa100)
    }
}


```