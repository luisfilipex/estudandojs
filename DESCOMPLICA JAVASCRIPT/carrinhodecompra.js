const shoppingCart = [];

//adicionar item carrinho
function addItemToCart(item){
    shoppingCart.push(item)
}


//remover item carrinho
function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
}


//ver carrinho
function viewCart(){
    if(shoppingCart.length == 0 ){
        console.log("Seu carrinho está vazio!")
    }else{
        console.log("Os Itens do seu carrinho são: ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

//limpar carrinho
function clearCart(){
  shoppingCart.length = 0;
    console.log("Seu carrinho foi limpo")
}

addItemToCart("Tenis")
addItemToCart("blusa")
addItemToCart("meia")
addItemToCart("bone")

viewCart()

//comentarios 
// removeItemFromCart("blusa")
//viewCart()

//clearCart()
