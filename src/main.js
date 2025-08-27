const readline = require('readline');



const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
});

function pergunta(questao) {
    return new Promise(resolve => {
        rl.question(questao, (resposta) => {
            resolve(resposta);
        });
    });
}

function validarNumero(numero) {
    const num = parseFloat(numero);
    return !isNaN(num) && num >= 0;
   
}

function medalhaDeAcordoComPosicao(numero) {
    const posicoes = ['ouro', 'prata', 'bronze', 'nenhuma'];
    if (numero >= 4 ) {
        return posicoes[3];
    } else {
        const posicao = numero - 1;
        return posicoes[posicao];
    }
}

async function retornarMedalha() {
    const numeroDoUsuario = await pergunta('Digite a sua posição na competição: ');
    if (validarNumero(numeroDoUsuario)) {
        const medalha = medalhaDeAcordoComPosicao(numeroDoUsuario);
        console.log("Parabéns, sua medalha foi de " + medalha);
            rl.close();
    } else {
        console.log('Digite uma posição válida.');
        retornarMedalha();
    }
}


retornarMedalha();
