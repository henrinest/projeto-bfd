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

    let pessoa = {
        nome : "Ana",
        idade: 25,
        cidade: "São Paulo"
    };

    for (chave in pessoa) {
        console.log(`${chave}: ${pessoa [chave]}`);
    }
}

funcIdade()