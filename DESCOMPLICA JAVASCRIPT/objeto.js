// 1ª forma de criar objeto

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome']);


// segunda forma de criar objeto

const funcionario = new Object();
funcionario.nome = "Luis"
funcionario.sobrenome = "Filipe"

console.log(funcionario.nome)

// usando funcao

function criarPessoa(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome} ${this.idade}`
        }
    }
}
const p1 = criarPessoa("Luis","Filipe","20")

const p2 = criarPessoa("Jose", "Carlos", "50")
console.log(p1)
console.log(p2)
