*Zkusime si jeste zapsat string se zpetnym lomitkem uvnitr*

```
let message = "takto zapiseme zpetne lomitko \\"
console.log(message)

// -> takto zapiseme zpetne lomitko \
```


# Operatory inkrementace/dekrementace
- ++    (increment)
- \--   (decrement)

Da se zapsat pred vyrazem nebo za vyrazem, pokud se pouziva tak se ale bezne pise "za".

```
let a = 4
a++

console.log(a) // -> 5
```

*Pozn.: jednoradkovy komentar muzete zapsat na stejnem radku jako prikaz, proste ho napise za nej.*

```
let a = 1
let b = a++ + 1  // a=2, b=2
let c = ++a + 1  // a=3, c=4
```

Pozn.: *operatory delime na ***unarni***, ***binarni*** a ***ternarni*** (unary/binary/ternary). Nebojte je to jednoduche. Jde jen o to kolik prvku ovlivnuji, unarni 'pracuje' s jednim prvkem, binarni se dvema a ternarni ma tri kolonky :) *

```
// unarni
-1
+0

// binarni
2 + 2
a < 8

// ternarni, je jednoduchy ale ze zacatku zvlastni
// __ ? _ : _

podminka ? ano : ne

// napriklad
4 < 2 ? "ctyri je mene nez dva" : "ctyri neni mene nez dva"
```


## Operator precedence .. prednost operatoru
Aby se s operatory pracovalo lepe maji nektere operatory vetsi vahu/prednost nez jine. Obecne si to nemusite prilis pamatovat protoze je to udelane tak aby to davalo smysl. 

napr.:
```
let cislo  =  1 + 2 * 3
let cislo2 = (1 + 2) * 3

// nebo 
if( a >= 2 || b === 12)
```



# Boolean
Typ boolean obsahuje jen dve hodnoty: 
- true (pravda)
- false (lez)

```
let pravda = true

let lez = false
```

## operatory
- <    (vetsi nez)
- \>   (mensi nez)
- <=   (mensi nebo rovno)
- \>=  (vetsi nebo rovno)

- ==   (je roven)
- ===  (je striktne roven)
- !=   (neni roven)
- !==  (striktne neni roven)

- &&   (A)
- ||   (NEBO)
  
- ! (negace, opak, 'neni')

```
let a = 4

a < 3       // -> false
a == 4      // -> true
a >= 4      // -> true
!(a == 4)   // -> false
!a          // -> false
!!a         // -> true
a != 4      // -> false
a != 5      // -> true
```


# Truthy / Falsy
Javascript narozdil od spousty jinych jazyku prilis neresi typy dat. 
Pokud chcete udelat neco co by jinde neslo protoze pouzivate dva nekompatibilni typy dat, JS se proste pokusi odhadnout co jste asi zamysleli a prevede si je podle sebe. I kdyz se to muze zdat jako dobra vlastnost opak je pravdou tohle chovani je jeden z hlavnich duvodu proc hodne programatoru nema rado JS.

Docela pekna vlastnost je ale truthy/falsy, cesky bysme rekli asi neco jako pravdivost/lzivost-falesnost hodnot. 

Jde o to ze kdyz chceme nekde typ Boolean tzn. pravdu nebo lez ale misto toho dostaneme jen cislo, nebo treba string jak JS rozhodne jestli to prevede na 'true' nebo 'false'?

```
!!""        // -> false
!!"ahoj"    // -> true
!!"false"   // -> true
!!0         // -> false
!!4         // -> true
!!-1        // -> true
```



# Priste si ukazeme IF podminky a pochopime tak k cemu je dobre mit typ bool


## zkuste vyresit tenhle maly problem:
```
// promenna a = 3, b = 8
// zkuste jejich hodnoty prohodit bez toho abyste je primo napsali cislo

let a = 3
let b = 8

console.log(`a: ${ a }`)
console.log(`b: ${ b }`)
```