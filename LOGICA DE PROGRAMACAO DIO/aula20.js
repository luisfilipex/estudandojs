class FormaBolo {
    constructor(saborDaMassa, saborRecheio) {
      this.saborDaMassa = saborDaMassa;
      this.saborRecheio = saborRecheio;
    }
  
    escrever() {
      console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
  }
  
  let boloFesta = new FormaBolo("Massa de chocolate", "recheio de nutella");
  boloFesta.escrever();