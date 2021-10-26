console.log("Merhaba Kodlama.io")
// javascript typesafe değildir
let dolarDun = 9.2
let dolarBugun = 9.3

{
    let dolarDun = 9.1
    console.log(dolarDun)
}

console.log(dolarDun)
// const sadece okunabilir 
const euroDun = 11

console.log(euroDun)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu-komut Kredisi"]

console.log("<ul>")

for (let i = 0; i<3; i++ ) {
    console.log("<li>" + konutKredileri[i] + "<li>" )
}
console.log("<ul>")

