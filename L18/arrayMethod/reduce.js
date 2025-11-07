// let arr = [23,45,56,78,66];
// let x = arr.reduce((acc,item,ind,arr)=>{
//     // console.log("hello");
//     // console.log(item,ind,arr);
//     console.log(acc);

//     // return "hello"

//     return ind*5;
// })

// console.log(x)

let arr = [23,45,66,28,75];
let sum = arr.reduce((acc,item,ind,arr)=>{
    return acc+item;
},0)

console.log(sum);