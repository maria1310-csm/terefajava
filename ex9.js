function validacao{

    let temarroba = email.includes('@');

    let poarroba = email.indexOf('@');

    let tempontodepois = email.indexOf ('.', posarroba) > posarroba;

}

let email = window.prompt("digite um email: ");

if (validacao(email)){
    console.log("o email é valido!");
} else {
    console.log ("o email não é valido");
}