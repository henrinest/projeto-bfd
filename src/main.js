class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositarValor() {
        this.saldo += 100;
        console.log(`Seu saldo atual é de: R$ ${this.saldo}`);
    }
    
    sacarValor() {
        let sacarSaldo = 200
        if (this.saldo <= sacarSaldo){
            console.log (`Saldo indisponível para saque! Seu Saldo atual é de: R$ ${this.saldo}`)
        } else {
            this.saldo -= sacarSaldo
        console.log(`Seu saldo atual é de: R$ ${this.saldo}`);
        }
    }
}

let conta1 = new ContaBancaria("João", 1000)

conta1.depositarValor()
conta1.sacarValor()