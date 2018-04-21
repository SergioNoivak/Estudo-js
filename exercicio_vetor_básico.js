
// A soma de um intervalo
// A introdução desse livro mencionou a seguinte maneira como uma boa alternativa para somar um intervalo de números:

// console.log(sum(range(1, 10)));
// Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números a partir do valor start até o valor end (incluindo-o).

// Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.

// Como exercício bônus, modifique a sua função range para aceitar um terceiro argumento opcional que indica o tamanho do "incremento" usado para construir o array. Se nenhum valor for atribuído ao tamanho do incremento, o array de elementos será percorrido em incrementos de um, correspondendo ao comportamento original. A chamada à função range(1, 10, 2) deve retornar [1, 3, 5, 7, 9]. Certifique-se de que funcione também com valores negativos, fazendo com que range(5, 2, -1) produza [5, 4, 3, 2].

// // Your code here.

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55


//teste

let vetor =  (range(10,1));
   let summm = (sum(vetor));
   console.log(summm);

function range(start, end){

let vetor = [];
let i;
for(i=start; (start<end)? (i<=end):(i>=end) ;(start<end)?(i++):(i--)){
    
    vetor.push(i);

}

return vetor;

}

function sum(vetor){
    if(! (vetor instanceof Array))
        return;
    
        console.log(vetor);

    let acumulador=0;
vetor.forEach((element,index) => {
        acumulador+=element;
});
    return acumulador;    
}

