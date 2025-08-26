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

async function exArray() {

    let numerosInt = []

    const num1 = await pergunta("Digite um número inteiro: ")
    numerosInt[0] = parseFloat(num1)

    const num2 = await pergunta("Digite um número inteiro: ")
    numerosInt[1] = parseFloat(num2)

    const num3 = await pergunta("Digite um número inteiro: ")
    numerosInt[2] = parseFloat(num3)

    const num4 = await pergunta("Digite um número inteiro: ")
    numerosInt[3] = parseFloat(num4)

    const num5 = await pergunta("Digite um número inteiro: ")
    numerosInt[4] = parseFloat(num5)

    if (Number.isInteger(numerosInt[0]) && (numerosInt[1]) && (numerosInt[2]) && (numerosInt[3]) && (numerosInt[4]) ) {
        console.log (`Array com 5 números inteiros: ${numerosInt} `)
    } else {
        console.log("Reset")
        console.log (`Array com 5 números inteiros: ${numerosInt} `)
        console.log
        numerosInt = []
        return exArray()
    }

}

exArray()