var string = "abc";


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