// async function fun(params) {
//     // let x = "hello";
//     // return x;
// }
// let y = fun();
// console.log(y);



// async ek keyword hai , async "promise " return karta hai

let pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve data');
    },4000)
})
pr
    .then((x)=>{
        console.log(x);
    })
// console.log(pr);