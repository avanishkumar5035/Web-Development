var arr = [22,34,54,67,45];
let mapArr = arr.map((item,ind,arr)=>{ // item, ind, arr is a optional
    // console.log(item);

    return ind*5;
})
console.log(mapArr)