let nomeDoHeroi = "Cleitim"
let nivel = 2000
let xp = ""

if (nivel <= 1000) {
    xp ="Ferro"
} else if (nivel >= 1001 && nivel <= 2000) {
    xp = "Bronze"
} else if (nivel >= 2001 && nivel <= 5000) {
    xp ="Prata"
} else if (nivel >= 6001 && nivel <= 7000){
    xp ="Ouro"
} else if (nivel >= 7001 && nivel <= 8000) {
    xp ="Platina"
} else if (nivel >= 8001 && nivel <= 9000) {
    xp ="Ascendente"
} else if (nivel >= 9001 && nivel <= 10000) {
    xp ="Imortal"
} else {
    xp ="Radiante"
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${xp}.`)

