// Recursão
// Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar, usando % 2 para verificar se ele é divisível por dois. Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:

// Zero é par.
// Um é ímpar.
// Para todo outro número N, sua paridade é a mesma de N - 2.
// Defina uma função recursiva isEven que satisfaça as condições descritas acima. A função deve aceitar um número como parâmetro e retornar um valor Booleano.

// Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê? Você consegue pensar em uma maneira de arrumar isso?

// // Your code here.

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??



    function is_pair(numero){

        if(numero===0)
            return true;
        if(numero==1)
            return false;

        return is_pair(numero-2);
    }


    console.log(is_pair(2));
    console.log(is_pair(3));
    console.log(is_pair(4));
    console.log(is_pair(5));







