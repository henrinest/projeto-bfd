const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pergunta(questao) {
    return new Promise ((resolve) => {
    rl.question(questao, (resposta) => {
    resolve(resposta)
    })
    }
)}

async function medalhaDeAcordoComPosicao() {
    let medalhas = ["Ouro", "Prata", "Bronze", "NADA"]

    const posCorrida = await pergunta ("Digite a sua posição na corrida: ")
    const num = parseInt(posCorrida) - 1

    if (num >= 0 && num <= 2){
    console.log (`Sua medalha recebida foi: ${medalhas[num]}`)
    } else {
    console.log (`Sua medalha recebida foi: ${medalhas[3]}`)
    }
    rl.close()
}

medalhaDeAcordoComPosicao()