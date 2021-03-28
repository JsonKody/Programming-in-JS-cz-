# Proměnné - let, const, var

Dosud jsme pro vytvoření nové proměnné používali pouze slovíčko **let**, ale ve skutečnosti má JS pro proměnné tři různá slovíčka (keyword): **let**, **const** a **var**.

## var

Je nejstarší způsob a protože měl určité 'mouchy', byly do nového JS přidány **let** a **const** aby **var** nahradily. Var proto nebudeme používat.

## let

Nový způsob definice proměnné. Budeme ho používat namísto var.

## const

(jako konstant - konstanta)<br>
Ve všem až na jeden malý detail je **const** shodné s **let**. Narozdíl od **let** ale jednou naplněné **const** už nelze naplnit nečím jiným.

## Opakování je matka ...

Jméno proměnné je složeno z písmen a čísel, ALE nesmí začínat číslem.
Také může obsahovat znaky **$** a **\_**.

```js
// toto je OK
let $ = 'dollar'
let _ = 'podtrzitko'
let cislo1 = 'podtrzitko'

// toto neni OK!
let 1cislo = "NEFUNGUJE .. jmeno promenne nesmi zacinat cislem"
let cislo* = "NEFUNGUJE .. nepovoleny znak ve jmene promenne"
```

Proměnné jsou tzv. dynamicky typované - mohou obsahovat jakýkoliv typ:

```js
let x = 5;
x = "Jablko";
```

Je osm datových typů:

1. **number** pro čísla (celá i desetinná),
1. **string** pro řetězce - prostě posloupnost znaků jako např. "ahoj",
1. **boolean** pro logické hodnoty - true/false (pravda/lež),
1. **object** – pro komplexní datové struktury
1. **undefined** – typ s jedinou hodnotou 'undefined', což znamená 'prázdný - zatím jsi sem nic nedal'
1. **null** – typ s jedinou hodnotou 'null', což znamená něco jako 'prázdný' nebo 'nic tu není'
1. **bigint** pro obrovská celá čísla (nebudeme používat)
1. **symbol** pro unikátní identifikátory (nebudeme používat)

Pozn.: přestože

```js
typeof function () {};
// vypise: 'function'
```

je funkce brána jako datový typ 'object'. Můžeme to brát tak, že je to speciální typ objektu .. podmnožina objektu.

## Obrázek může být lepší než tisíc slov

```js
let message = "Hello";

//...

message = "World!";
```

![let box](./let1.png)<br>
![let box change](./let2.png)<br>
![tentacle(t)](./let3.png)

**_Měli byste si přiřazení proměnné představovat spíše jako chapadla než krabice. Proměnná 'neobsahuje' hodnotu. 'Ukazuje' na ni - drží ji. Program může přistupovat jenom k těm hodnotám na které má odkaz (reference) .. ukazuje na ně nějaká proměnná. Pokud si potřebujete něco zapamatovat, vytvoříte 'chapadlo', které to chytne nebo tu věc dáte držet nějakému již vytvořenému chapadlu._**

## Declaration (deklarace)

```js
let cislo;
```

Proměnná je vytvořena, ALE ještě jsme jí nedali žádná data. Její obsah bude teda defaultně **undefined**.

Až později ji můžeme využít k podržení např. čísla osm:

```js
cislo = 8;
```

## Definition (definice)

```js
let cislo = 5;
```

Proměnná je vytvořena, a rovnou jsme jí předali číslo **5**.

## Alternativní zápisy

Je možné definovat si několik proměnných za sebou pouze oddělených čárkami.

```js
let clovek = "Pepa",
  vek = 25,
  zprava = "ahoj lidi";
```

toto je shodné s tímto:

```js
let clovek = "Pepa";
let vek = 25;
let zprava = "ahoj lidi";
```

První způsob zápisu oddělený čárkami můžeme 'roztáhnout' přes několik řádků:

```js
let clovek = "Pepa",
  vek = 25,
  zprava = "ahoj lidi";

// nebo i s čárkami vepředu

let clovek = "Pepa",
  vek = 25,
  zprava = "ahoj lidi";
```

## Co znamená, že const lze definovat pouze jednou?

Obyčejné proměnné definované pomocí var nebo let jde měnit. Jednou do nich dáme třeba číslo pět, to potom nahradíme číslem osm atd. Const ale vychází ze jména konstanta a byl zaveden právě pro případy kdy předem víme, že nechceme nekdy měnít co co do něj jednou přiřadíme. Je dobrým zvykem napříč programovacími jazyky psát jméno konstanty velkými písmeny. Tak je potom všem jasné, že pracují s konstanou.

Př:.

```js
const PI = 3.14159265359;

// ...
// nekde uplne jinde v kodu ...

function vypocet(cislo) {
  return cislo * PI;
}
// kazdemu je jasne uz ze zapisu velkymi pismeny ze PI je nejaka konstanta
```

A teď si ukážeme rozdíl mezi primitivními a Objektovými datovými typy a co to pro nás znamená v souvislosti s const:

```js
// definice opravdove konstanty s primitivním datovým typem
const PI = 3.14159265359;
//...
PI = 3.15;
// -> Chyba! Konstanta uz má přiřazeno jiné číslo.

const clovek = { jmeno: "Karel", vek: 21 };

clovek.jmeno = "Melichar";

console.log(clovek); // -> {jmeno: "Melichar", vek: 21}
```

![objekt vs primitiv](./tent1.png)

## Dva problemy s var a jak je resi let/const

***block scope*** vs ***function scope***

```js
function nejakaFunkce() {
  var jedna = 1;
  let bedna = "bedna";

  if (jedna === 1) {
    var deset = 10;
    let peset = "pesos";
  }

  console.log(jedna); // -> 1
  console.log(bedna); // -> 'bedna'
  console.log(deset); // -> 10
  console.log(peset); // -> Chyba! peset neni definovano!
}
```

## Pozor na

Není možné deklarovat proměnnou pojmenovanou jako nějaký 'keyword' z jazyka JS.

```js
// napr.:
let var = "ahoj";
const for = "svete";
var while = "JS";
// atd.
```

Podobně, není možné deklarovat/definovat jméno proměnné která již existuje:

```js
let zprava = "ahoj";
let zprava = "svete";
```

# Materiály:

### Eloquent JavaScript: https://eloquentjavascript.net/index.html

### Javascript info: https://javascript.info/variables
