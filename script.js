// let objekt je editovatelný, const objekt ne
let zamestnanec = {
    jmeno: "Michal",
    plat: 30000,
    zamestnaneckeID: 3310,
}

zamestnanec.zamestnaneckeID = 4455

console.log(zamestnanec.zamestnaneckeID)

// pole - číslujeme vždy od 0
let jmena = ["Jana", "Martin", "Michaela", "Sona", "Milan"]
//             0        1          2         3       4
// let jmeno = ["S", "o", "n", "a"]

let zamestnanci = [
    {jmeno: "Michal", zamestnaneckeID: 3310,}, // 0
    {jmeno: "Oksana", zamestnaneckeID: 1000,} // 1
]

let pizzerie = [
    {nazev: "Hawaii", cena: 220, ingredience: ["smetana", "ananas", "sunka"]},
    {nazev: "Salami", cena: 220, ingredience: ["rajcata", "salam", "slanina", "paprika"]}
]                                              //  0         1         2          3

console.log(jmena[3])
console.log(zamestnanci[1].zamestnaneckeID)
console.log(pizzerie[1].ingredience[2])
console.log(pizzerie[1].ingredience.length)

console.log(`pred zmenou ${jmena}`)

jmena.shift() // smažeme jméno na začátku pole
jmena.pop() // smažeme jméno na konci pole
jmena.unshift(["Tomas", "Linda"]) // přidáme jméno na začátek pole
jmena.push("Albert") // přidáme jméno na konec pole

/*let index = jmena.indexOf("Michaela")
jmena.splice(index, 1)*/
jmena.splice(jmena.indexOf("MIchaela"), 1)

console.log(`po zmenach ${jmena}`)


let mesta = ["Praha", "Brno", "Ostrava", "Plzen", "As"]

for(let m of mesta) {
    console.log(m)
}

// 3 verze zápisu
for(let m of mesta) {
    // console.log(`Mesto ${m} ma v nazvu ${m.length} znaku`)
    
    if(m.length >= 5) {
        console.log(`Mesto ${m} ma v nazvu ${m.length} znaku`)
    }
}

mesta.forEach((hodnota, index) => {
    if(hodnota.length >= 5) {
        console.log(`Mesto ${hodnota} ma v nazvu ${hodnota.length} znaku. Tato hodnota sidli na indexu ${index}`)
    }
})

let pizza = {
    nazev: "Hawaii",
    cena: 220,
    ingredience: ["smetana", "ananas", "sunka"],
}

console.log(pizza.nazev)
console.log(pizza["nazev"])

// u objektů používáme operátor in, u pole of
for(let k in pizza) {
    console.log(pizza[k])
}


// faktoriál !5 = 5 * 4 * 3 * 2 * 1

let hesloDatabaze = "TajneHeslo"
let zadani = prompt("Zadej heslo: ")

let operator = 0

/* // ohlídat si, aby byl cyklus konečný
while() {
    console.log(operator++)
    // operator = operator + 1
    // operator = operator - 1 // operator--
} */

while(zadani !== hesloDatabaze) {
    zadani = prompt("Spatne zadane heslo, zadej heslo znovu: ")
}

console.log("Prihlaseni se podarilo!")
