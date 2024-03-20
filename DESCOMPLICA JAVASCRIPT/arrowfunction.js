const soma = (num1,num2) => {
    return num1 + num2
}
console.log(soma(3,6))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores);


var listProdutos = ["geladeira","fogao","cafeteira"];
var listaEmMaiscula = listProdutos.map(primeiraEmMaiscula)

function primeiraEmMaiscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaEmMaiscula);