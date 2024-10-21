var nome="maria isabel cassamasimo";

var div= nome.Split(" ");

var primeironome= div[0];
var ultimonome= div[div.lenght-1];

var email= primeironome.toLowerCase()+"."+ultimonome.toLowerCase()+ "@Facens.br";

console.log(email);