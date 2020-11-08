# JS v HTML (& CSS)
[Odkaz na hru na Surge.sh](https://lekce9.surge.sh/)
![náhledový obrázek](../asssets/images/9.png)


V této lekci si v rychlosti ukážeme jak zapsat JS do naší webové stránky a vytvoříme si jednouduchou hru -> 'Uhodni číslo'


# 💪🤓😎🦧🦉🦩🐊🛰🚀🛸⭐⚡🏆🎖🎓💎⚔🤯
[Seznam emoji najdete tady.](https://unicode.org/emoji/charts/full-emoji-list.html)

Jako trénink zkuste hru dodělat "pořádně".
Hra by např. mohla/měla:

 1. sdělit hráči jestli je číslo menší/větší než jeho tip
 2. zobrazit bod č. 1 i nějak graficky, aby to bylo jasné na první pohled
 3. po každém pokusu vymazat obsah inputu a nastavit focus tak aby hráč rovnou mohl napsat nové číslo
 4. vypadat lépe -> zkuste si pohrát s CSS, fonty ([google fonts](https://fonts.google.com/)) a obrázky
 5. trochu lépe popisovat co ma hráč dělat. Co se zrovna ve hře děje. Pradidla hry atd.
 6. mít přísnější pravidla -> např. počet pokusů na jednu hru. Pokud přidáte počet pokusů, měli byste hráče informovat, kolik pokusů mu ještě zbývá. Můžete přidat třeba i manuální nastavení, takže si každý hráč bude moci nastavit počet pokusů sám (ale i to by mělo mít nějaký 'default počet' pokud hráč nic nastavovat nechce).
 7. atd. vymyslete si sami nejakou funkci a zkuste ji implementovat (přidat)


# Surge.sh
[Surge.sh](http://surge.sh) nainstalujete tak, že do terminálu napíšete: 

```bash
# kratka verze
npm i -g surge

# nebo delsi verze - je to uplne to same
npm install --global surge
```

Deploy (nahození stránky na web), provedete tak, že si otevřete terminál a napíšete:

```bash
surge
```

Surge se vás zeptá na složku, kde je stránka, kterou chcete deployovat.
Poté vygeneruje doménu napr.:

```bash
 domain: beautiful-smash.surge.sh
```

<span style="color: yellow">beautiful-smash</span>.surge.sh

Tu žlutou část můžete upravit jak je libo, jen už to nesmí být zabrané a samozřejmě můžete použít pouze znaky které jsou povolené v URL (internetová adresa).

# ⚠ POZOR! ⚠
Jméno hlavní stránky MUSÍ být 'index.html', jinak surge nebude vědět, který soubor načíst a bude vám hlásit ze stránka neexistuje ;)