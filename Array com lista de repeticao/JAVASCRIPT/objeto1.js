function criarFuncionario(nome, sobrenome,a,p){

    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,

        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("Abaixo do peso")
            }else if(indice >= 18.5 && indice < 24.9){
                console.log("Peso normal")
            }else if(indice >= 25 && indice < 29.9){
                console.log("Acima do Peso")
            }else if(indice >= 30 && indice < 34.9){
                console.log("Está obeso grau 1")
            }else if(indice >= 35 && indice < 39.9){
                console.log("Está obeso grau 2")
            }else if(indice >= 40){
                console.log("Está obeso grau 3")
            }
        }
    }
}

const p1 = criarFuncionario("Marcelos","Estruc",1.75,50);
p1.calculoImc();