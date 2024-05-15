function vrf (age){
    if (age <18){
        return('tu é cabaço');
    } 
    else if (age <60){
        return('ta certo');
    } 
    else{
        return('velho')
    }
}

console.log(verify(19));
console.log(verify(40));
console.log(verify(72));

const verify = (age) => {
    if (age <18){
        return('tu é cabaço');
    } 
    else if (age <60){
        return('ta certo');
    } 
    else{
        return('velho')
    }
} 

console.log(verify(12));
console.log(verify(45));
console.log(verify(77));

