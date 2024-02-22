//Interpolação de string

createStringConnection("db_products", "felipe", "9876")

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCCONOECT;user=${user},pass=${pass};initial_database =${databaseName}`)
}


/*Criando função

torrar("pão integral", "Luis", 10.90)


function torrar(pao, nome = "Cliente", valor){
    console.log("Torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
    console.log("O valor total é " + valor)
}
*/