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
    const idade = await pergunta("Qual é sua idade? ")

    for (i = 1; i <= idade; i++){
        console.log(`Num determinado ano voce fez ${i} anos.`)
    }
}

funcIdade()