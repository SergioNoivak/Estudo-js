

function reverseArray(vetor){

    var length_start = vetor.length;
    var reverse_extern = [];
    for(var i=0;i<length_start;i++)
        reverse_extern.push(vetor.pop());
    
    return vetor;
}


function reverseInPlace(vetor){
    var metade = Math.floor((vetor.length)/2);
    for(var i=0;i<metade;i++)
    vetor[i] = [vetor[vetor.length-1-i],vetor[vetor.length-1-i]=vetor[i]][0];    
}

