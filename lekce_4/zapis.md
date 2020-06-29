## Priklad z minuleho dilu
```
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

```
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


```
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
```
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

```
let pohlavi = "zena"

if(pohlavi == "muz") {
    console.log("Vážený pane ...")
} else {
    console.log("Vážená paní ...")
}
```

# if-else-if
Pokud chceme zretezit vice podminek za sebe tak aby se provedla jen jedna z nich.

```
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

```
if("podminka") {
    // kod
} else if("podminka") {
    
} else if("podminka") {

} else {

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


