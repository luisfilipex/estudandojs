function escrevaMeuNome(nome){
    console.log('O meu nome é ' + nome);
}
function idade(idade){
    if(idade >= 18){
        return(escrevaMeuNome('Luis Filipe' + " você e maior de idade"));
    }else{
        console.log("Menor de idade");
    }
}
idade(18);
