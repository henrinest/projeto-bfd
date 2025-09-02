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
    }
    pegarLivro(livros) {

        console.log (`Usuário ${this.nome} pegou o livro "${livros.titulo}" emprestado. `)
        livro1.emprestado = true
    }
}

let usuario1 = new usuario("João Henrique")
let livro1 = new livros ("Bacurau", "Juliano Barrabé")
let livro2 = new livros ("Drácula", "Bram Stoker")

usuario1.pegarLivro(livro1)