let userName = getFirstName("Luis Filipe e Silva")

console.log("Welcome ! " + userName)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}
// split char pega o nome completo 
// se deixar o split que ta na variavel vazio e sem split char na funcao chama so o primeiro nome


/*

let resultado = soma(5, 10)

console.log("O resultado da soma é: " + resultado)

function soma(numA,numB){
    let somatorio = numA+numB
    return somatorio
} 
*/


// funcao so retorna 1 obj por vez ou vetor