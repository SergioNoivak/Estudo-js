


let objeto = {
    valor: 1,
    rest : {
        valor: 2,
        rest: {
            valor: 3,
        rest:null
        }
    }
}


var i;
for(i = objeto ; i!== null ; i =i.rest){
    
    console.log(i.valor);
    if(i.rest===null)
        break;
}


i.rest = {

    valor: 44,
    rest: null


}


for(i = objeto ; i!== null ; i =i.rest){
    
    console.log(i.valor);
    if(i.rest===null)
        break;
}



