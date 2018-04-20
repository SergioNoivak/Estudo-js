// Contando feijões
// Você pode acessar o N-ésimo caractere, ou letra, de uma string escrevendo "string".charAt(N), 
//similar a como você acessa seu tamanho com "s".length. 
//O valor retornado será uma string contendo somente um caractere (por exemplo, "b"). 
//O primeiro caractere está na posição zero, o que faz com que o último 
//seja encontrado na posição string.length -1. Em outras palavras, uma string com dois 
//caracteres possui tamanho (length) dois, e suas respectivas posições são 0 e 1.

// Escreva uma função countBs que receba uma string como único argumento 7
//e retorna o número que indica quantos caracteres "B", em maiúsculo, estão presentes na string.

// Em seguida, escreva uma função chamada countChar que se comporta de forma parecida
// com countBs, exceto que ela recebe um segundo argumento que indica o caractere 
//que será contado (ao invés de contar somente o caractere "B" em maiúsculo). 
//Reescreva countBs para fazer essa nova funcionalidade.

// // Your code here.

// console.log(countBs(“BBC”));
// // → 2
// console.log(countChar(“kakkerlak”, “k”));
// // → 4



function countBs(string){


    var i;
    var number_of_Bs = 0;
    
    for(i=0;i< string.length; i++)
        if(string.charAt(i)==="b")
            number_of_Bs++;
    
        return number_of_Bs;
}


console.log(countBs("fdsbbbbbbbbbbsafsdfdsfadsdgfdbsadsafdsagdsagcvdsewfdsagrevmreoanvkldean43qn"));



function countChar(string,char){


    var i;
    var number_of_char = 0;
    
    for(i=0;i< string.length; i++)
        if(string.charAt(i)===char)
            number_of_char++;
    
        return number_of_char;
}
console.log(countChar("fdsbbbbbbbbbbsafsdfdsfadsdgfdbsadsafdsagdsagcvdsewfdsagrevmreoanvkldean43qn","b"));


