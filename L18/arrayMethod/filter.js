var arr = [22,34,54,67,45];
let filterArr = arr.filter((item,ind,arr)=>{
    if(item%2==0){
        return true;
    }
})
console.log(filterArr);
let student = [
    {name: "smith",rollno:31,marks:80},
]