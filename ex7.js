function inerterString (str){
    return str.split('').reverse().join('');
}

let argumento = window.prompt("digite um argumento:");

let stringInvertida = inverterString(argumento);

console.log(stringInvertida);