# promenne (variables):
- var (zastarale)
- let
- const


# jmena promennych:

1. camelCase (doporucene) !snake_case, !PascalCase, !kebab-case
2. pismena a cisla
3. muze zacinat $
4. ..nebo _
5. ! nesmi zacinat cislem
6. ! zadne specialni znaky (napr.: moje-promenna)
7. ! nesmi byt keyword (napr.: let let = 2)


# typy: 
- primitivni (primitive)
- objektove (object)

## primitivni: 
- Number (cislo)
- String (text)
- Boolean
- undefined
- BigInt
- Symbol

Typ muzeme poznat pomoci operatoru "typeof"

## undefined:
Znamena jednodusse ze v promenne jeste (nebo uz) nic neni .. krabice je prazdna.

```
let a

console.log(a)

// -> undefined
```

## String:
- umi se skladat (concatenate) pomoci operatoru '+'
- ma ruzne metody jako napr. .toUpperCase() 
- ma take vlastnosti (property) jako napr. .length (delka)
- muze byt i prazdny string ""

String muzeme zapsat tremi zpusoby:
- "dvojite uvozovky"
- 'jednoduche uvozovky'
- \`backtick .. tzv. template literal .. ${ promenna } \`

```
let jmeno   = "Karel Sivak"
let zprava1 = "Ahoj, ja jsem " + jmeno + "."
let zprava2 = `Ahoj, ja jsem ${ jmeno }.`

// Ahoj, ja jsem Karel Sivak.
```

# Cislo (Number) 
V jinych jazycich vetsinou rozlisujeme jestli chceme cislo desetinne nebo cele. V JS mame jen typ Number v podstate na vsechno. Ve vzacnych pripadech se da pouzit jeste typ BigInt

## operatory:
- \+ (plus, scitani)
- \- (minus, odcitani)
- \* (krat, nasobeni)
- \/ (deleni)
- %  (deleno modulo, zbytek)
- ** (umocnovani, nove v ES6)

operator prirazeni '=' se da zkombinovat s ostatnimi operatory pro pocitani:
- +=
- -=
- *=
- /=
- %=
- **=

```
let cislo = 4

// takze misto
cislo = cislo + 4

// muzeme napsat
cislo += 4
```

## Vsimete si ze operator '+' je trochu zvlastni protoze se pouziva jak ke 'scitani' Stringu (textu), tak cisel. Z pohledu programovani jsou to ovsem dve uplne odlisne operace.