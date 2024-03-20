var s = "javascript e python"

var pos1 = s.indexOf("python")
 console.log(pos1)


 var novaString = s.substring(13,19)
 console.log(novaString)



 var frase = "ola mundo";
 
 if(frase.startsWith("ola")){
    let sub = frase.substring(4)
    let novaString = sub.replace("mundo", "pessoal")
    let novaStringMaiscula = novaString.toUpperCase();
    console.log(novaStringMaiscula)
 }