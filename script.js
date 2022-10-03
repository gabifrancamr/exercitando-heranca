class Captain {
    constructor(nome, idade, horasDeVoo){
        this.nome = nome
        this.idade = idade
        this.horasDeVoo = horasDeVoo
    }
}

class SpaceShip {
    constructor(nome, quantidadeTripulantes, captainNome, captainIdade, captainHorasDeVoo){
        this.nome = nome
        this.quantidadeTripulantes = quantidadeTripulantes
        this.captain = new Captain(captainNome, captainIdade, captainHorasDeVoo)
    }
}

let spaceship = new SpaceShip("Ártemis", 13, "Will Grey", 45, 15000)

console.log(spaceship)