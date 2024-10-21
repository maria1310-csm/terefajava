function contvogais (str) {

    let contador = 0;

    for (let i=0; i <str.lenght; i++){

        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'  )
            cont++;
    }
}
  return contador;

  let texto =window.prompt("digite uma palavra: ");
  let numerodevogais = contvogais(texto);

  console.log( " numero de vogais minusculas: " + numerodevogais);

