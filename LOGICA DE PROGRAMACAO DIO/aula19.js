
let invoice ={
    name: "Luis",
    age: 29,
    products: {
        0: ["Mouse 2x", 29.90],
        1: ["Teclado Mecânico", 129.00],
        2: ["Monitor", "1500,00"]
    }
}
console.log(`O comprador é ${invoice.name}`)
console.log(`a idade é ${invoice.age}`)
console.log(`Os produtos são ${invoice.products}`)



/* forma mais complexa
let name = "Luis"
let age = 29
let products = ["Mouse 2x", "Teclado", "Monitor"]
let productsValues = [29.90, 120.0, 1500.00]


generateInvoice(name, products, productsValues, age)
function generateInvoice(name, products, productsValues,age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("--------")
    console.log("Produto é " + products[0])
    console.log("O Valor é " + productsValues[0])
}

*/