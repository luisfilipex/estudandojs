function divisao(a,b){
    if(b === 0){
        throw new Error("Divisao por zero não e permitido");
    }
    return a/b
}
try{
    const resultado = divisao(10,0);
    console.log("Resultado: " + resultado);
}catch(error){
console.log("Ocorreu uma execeção: " + error.message)
}