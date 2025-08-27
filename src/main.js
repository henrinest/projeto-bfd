const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Qual a sua primeira nota: ", escreva1 => {
    prompt.question("Qual a sua segunda nota: ", escreva2 => {
        prompt.question("Qual a sua terceira nota: ", escreva3 => {
            const nota1 = Number.parseFloat(escreva1);
            const nota2 = Number.parseFloat(escreva2);
            const nota3 = Number.parseFloat(escreva3);

            
            if (
                Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)
            ) {
                console.log("Um dos campos não foi preenchido corretamente. Tente novamente.");
                console.log("Por favor, insira apenas números válidos de 0 a 10.");
            } else if (
                nota1 > 10 || nota2 > 10 || nota3 > 10
            ) {
                console.log("Por favor, insira apenas números válidos.");
                console.log("Preencha com números de 0 a 10.");
            } else if (
                nota1 < 0 || nota2 < 0 || nota3 < 0
            ) {
                console.log("O valor deve ser maior ou igual a 0.");
            } else {
                const media = (nota1 + nota2 + nota3) / 3;

                if (media <= 6) {
                    console.log(`Sua média é ${media.toFixed(2)} e você foi REPROVADO!`);
                } else if (media <= 8) {
                    console.log(`Sua média é ${media.toFixed(2)} e você foi aprovado na MÉDIA!`);
                } else {
                    console.log(`Sua média é ${media.toFixed(2)} e você foi APROVADO!`);
                }
            }

            prompt.close();
        });
    });
});