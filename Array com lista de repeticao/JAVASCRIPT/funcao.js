
// funcao anonima

var calcula = function(numero){
    return numero*2
}
var x = calcula(4)
console.log(x);


//arrow function
const mensagem = (nome) => {
    console.log(`Olá, ${nome}!`);
}
mensagem("Luis");