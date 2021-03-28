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
Také může obsahovat znaky **$** a **_**.

Proměnné jsou tzv. dynamicky typované - mohou obsahovat jakýkoliv typ:
```js
  let x = 5
  x = "Jablko"
```

Je osm datových typů:
1. **number** pro čísla (celá i desetinná),
1. **bigint** pro obrovská celá čísla (nebudeme používat),
1. **string** pro řetězce - prostě posloupnost znaků jako např. "ahoj",
1. **boolean** pro logické hodnoty - true/false (pravda/lež),
1. **null** –  typ s jedinou hodnotou 'null', což znamená něco jako 'prázdný' nebo 'nic tu není'
1. **undefined** – typ s jedinou hodnotou 'undefined', což znamená 'prázdný - zatím jsi sem nic nedal'
1. **object and symbol** – pro komplexní datové struktury a unikátní identifikátory


## Obrázek může být lepší než tisíc slov
```js
  let message = "Hello"

  //...

  message = "World!"
```

![let box](./let1.png)
![let box change](./let2.png)
![tentacle(t)](./let3.png)

***Měli byste si přiřazení proměnné představovat spíše jako chapadla než krabice. Proměnná 'neobsahuje' hodnotu. 'Ukazuje' na ni - drží ji. Program může přistupovat jenom k těm hodnotám na které má odkaz (reference) .. ukazuje na ně nějaká proměnná. Pokud si potřebujete něco zapamatovat, vytvoříte 'chapadlo', které to chytne nebo tu věc dáte držet nějakému již vytvořenému chapadlu.***



# Materiály:

### Eloquent JavaScript: https://eloquentjavascript.net/index.html

### Javascript info: https://javascript.info/variables