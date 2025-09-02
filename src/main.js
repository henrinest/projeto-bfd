class livros{
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.emprestado = false
    }
}

class usuario {
    constructor(nome) {
        this.nome = nome
        this.livrosObtidos = []
    }
    pegarLivro(livros) {
        console.log (`Usuário ${this.nome} pegou o livro "${livros.titulo}" emprestado. `)
        livro1.emprestado = true;
        this.inserirLivro(livros);
        console.log(this.livrosObtidos);
    }
    inserirLivro(livro) {
        this.livrosObtidos.push(livro.titulo)
    }
}

let usuario1 = new usuario("João Henrique")
let livro1 = new livros ("Bacurau", "Juliano Barrabé")
let livro2 = new livros ("Drácula", "Bram Stoker")

usuario1.pegarLivro(livro1)