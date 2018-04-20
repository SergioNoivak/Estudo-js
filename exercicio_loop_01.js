

// Triângulo com Loop
// Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

// #
// ##
// ###
// ####
// #####
// ######
// #######

var i;
var str_acumulador = "";

for(i=0;i<7;i++){

    str_acumulador+= "#"
    console.log(str_acumulador);
}
