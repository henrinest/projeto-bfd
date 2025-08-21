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

async function funcIdade() {
    let idade = await pergunta("Qual é sua idade? ")

    do {
        console.log (`Idade: ${idade}`)
        idade++
    } while (idade <= 25);
}

funcIdade()