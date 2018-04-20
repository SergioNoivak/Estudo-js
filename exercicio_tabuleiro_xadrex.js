// Tabuleiro de Xadrez
// Escreva um programa que cria uma string que representa uma grade 8x8, 
//usando novas linhas para separar os caracteres. 
//A cada posição da grade existe um espaço ou um caractere "#". 
//Esses caracteres formam um tabuleiro de xadrez.

// Passando esta string para o console.log deve mostrar algo como isto:

//   # # # #
//    # # # #
//   # # # #
//    # # # #
//   # # # #
//    # # # #
//   # # # #
//    # # # #
// Quando você tiver o programa que gere este padrão, defina a variável size = 8 e altere programa para que ele funcione para qualquer size, a saída da grade de largura e altura.

    var i,j;

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            if(i%2==0)
                if(j%2==0)
                    process.stdout.write("#");
                else
                process.stdout.write(" ");      
            else
                if(i%2!=0)
                    if(j%2!=0)
                    process.stdout.write("#");
                    else
                    process.stdout.write(" ");
        }
        process.stdout.write("\n");
    }

