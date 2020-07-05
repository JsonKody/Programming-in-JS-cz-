[Odkaz na youtube video ->](https://www.youtube.com/watch?v=s0UMo6bFTnI&list=PL62jh-_-s39rP2eTM6f4495QmvgcdtssP&index=6)


# Funkce

Ve vetsine jazyku si muzete definovat vlastni funkce. Jedna se o velice mocny nastroj. Mimochodem mozna jste o tom zatim neslyseli, ale v programovani existuji tzv. programovaci paradigmata, tzn. jakym zpusobem se stavite k tomu samotnemu problemu, jakym zpusobem si ho pretvorite do kodu a vyresite. Jednim z techto paradigmat je i 'Funkcionalni paradigma' vedle dnes nejpopularnejsiho 'Objektove orientovaneho programovani' neboli OOP

Mimochodem pred chvili jsem mluvil o problemu. To proto ze programovani neni tolik o psani kodu. Programovani je o reseni problemu. O prehazovani dat a reseni problemu.

Nadefinujeme si prvni funkci. Mozna vite ze v Pyhtonu je pekna funkce print() ale v JS piseme console.log() a zadna funkce print tu v zakladu neni.

```js
function print() {
    console.log("funguje to!")
}
```

Tahle funkce ale zatim vubec nic nedela, jen existuje, ale nic nedela.
Aby neco udelala musime ji zavolat.
To se dela takhle:

```js
print()

// -> funguje to!
```

Pokud vite jak funkce print v Pythonu funguje tak jste si mozna vsimli, ze nase funkce je oproti ni 'naprd'. Pokazde vypise to same "funguje to!" ale to je nam v podstate k nicemu. My bychom chteli, aby ta funkce vypsala pokazde neco jineho, neco co ji rekneme aby vypsala.

K tomu nam slouzi argumenty funkce a ted se podivame jak je pouzit.
Napiseme si funkci print() znovu a lepe

```js
function print(zprava) {
    console.log(zprava)
}


print("Ted to konecne funguje tak jak ma!")

// -> Ted to konecne funguje tak jak ma!
```

Zkusime si napsat dalsi funkci. Funkci Simon rika ...

```js
function simonRika(coRikaSimon) {
    let zprava = "Simon rika: " + coRikaSimon

    print(zprava)
}
```

Vidite ze jedna funkce muze volat spousty jinych funkci. Treba tady jsme si vytvorili funkci simonRika, ktera uvnitr sebe zavola funkci print a ta zavola funkci console.log

```js
simonRika("udelej kotrmelec")

// -> Simon rika: udelej kotrmelec
```


## return

Nase funkce zatim nikdy nevratily zadnou hodnotu. Vzdy jen neco nekde udelaji a skonci. Zkusime si ted prepsat funkci simonRika tak, aby zpravu nevytiskl na konzoli, ale jen ji vratil.


```js
function simonRika(zprava) {
    return `Simon rika: ${zprava}`
}
```

Ted nam funkce simonRika v podstate jen upravi to co do ni napiseme a vrati nam to na dalsi pouziti. Takze pokud to chceme vypsat muzeme treba takhle


```js
print(simonRika("udelej kotrmelec"))

// -> Simon rika: udelej kotrmelec
```

nebo treba takhle: 

```js
let zprava = simonRika("I am the one who knocks")

console.log(zprava)
print(zprava)

// -> Simon rika: I am the one who knocks
// -> Simon rika: I am the one who knocks
```

Do funkce muzeme samozrejme zapisovat vice argumentu.
Nic nam nebrani vytvorit treba takovouhle funkci:

```js
function kdoRikaCo(kdo, co) {
    return `${kdo} rika: ${co}`
}

let zprava = kdoRikaCo("Walter White", "I am the one who knocks")
print(zprava)
// -> Walter White rika: I am the one who knocks

// .. muzeme cele volani funkce zapsat rovnou jako argument jine funkce

console.log(kdoRikaCo("Walter White", "I am the one who knocks"))
// -> Walter White rika: I am the one who knocks
```

## anonymni funkce

V javascriptu muzeme napsat i tzv. anonymni funkce. Ty se casto pisi nekam kde javascript ocekava funkci mohli bysme ji napsat 'bokem' a pak ji pripsat, ale vetsinou se takova funkce rovnou zapise do argumentu jine funkce, ktera ji vola. 
Nasleduje hypoteticky priklad:

```js
function soucet(a, b) {
    return a + b
}

fukceKteraPotrebujeJakoArgumentJinouFunkci(soucet)


// ted si to ukazeme s pomoci anonymni funkce

fukceKteraPotrebujeJakoArgumentJinouFunkci(function(a, b) {
    return a + b
})
```

Vsimete si ze funkci, kterou jsme predali jako argument nezpoustime pomoci () tim padem ji predavame jako funkci a funkce ktere byla predana si ji muze spoustet uvnitr sebe jak je libo.

Funkci jako argument muzeme samozrejme i spusti coz jsme ostatne udelali uz drive, ale pak nepredavame funkci -> spoustime funkci a co se stane zalezi na tom co funkce dela.