var a = ()=>{
    console.log('inside x Function')
}

function outer(y){
    var x= 20;
}
outer(a);