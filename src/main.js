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

async function perguntarnome() {
    primeiroNome = await pergunta("Qual é seu primeiro nome? ")
    ultimoNome = await pergunta("Qual é o seu último nome? ")

    console.log(`Olá, ${primeiroNome} ${ultimoNome}`)
}

perguntarnome()