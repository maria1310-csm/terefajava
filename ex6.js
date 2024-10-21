let num = window.prompt("digite um número:");

num = ParseInt(num);

if (num <= 0){
    console.log("Só é aceito números positivos maiores que ZERO");
}else {
    
    let dobro = num * 2;

    console.log("O dobro de" + num + "é" + dobro);
}
 
