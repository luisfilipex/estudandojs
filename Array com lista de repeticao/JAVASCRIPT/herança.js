class DispostivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }

}

//aqui ele puxa a class de cime 
class SmartPhone extends DispostivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


var s1 = new SmartPhone("SamSung","Preto","A71")

console.log(s1);
//para ligar
s1.ligar();

//aqui ele vai confirmar que está ligado
s1.ligar();