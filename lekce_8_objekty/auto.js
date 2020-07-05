let auto = {
    znacka: "BMW",
    nadrz: 83,
    spotreba: .082,
    ujeto: 0,

    vypoctiSpotrebu(km) {
        return km * this.spotreba
    },

    dojezd() {
        return this.nadrz / this.spotreba
    },

    jed(km) {

        let dojezd = this.dojezd()

        if(km > dojezd) {
            this.nadrz = 0
            this.ujeto += dojezd
            console.log(`Nadrz je prazdna, ujel jsi jen ${ dojezd }`)
        } else {
            this.nadrz -= this.vypoctiSpotrebu(km)
            this.ujeto += km
            console.log(`Ujel jsi ${km} Km. V nadrzi zbyva ${ (this.nadrz).toFixed(2) }.`)
        }
    },
    vypis() {
        console.log(`
    Vypis
    ----------------------------------
    Nadrz:          ${ (this.nadrz).toFixed(2) } l
    Celkem ujeto:   ${ (this.ujeto).toFixed(2) } Km
    Spotreba:       ${ (this.spotreba * 100).toFixed(2) } l/100 Km
                    `)
    }
}

auto.jed(400)
auto.jed(400)
auto.jed(400)
auto.vypis()
