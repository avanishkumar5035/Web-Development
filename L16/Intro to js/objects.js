var student = {
    name : "avanish",
    age : 18,
    city : "mainpuri",
    sem:5,
    marks:[6.5,6.3,6.4,6.4],
    key:34
}
console.log(student);
console.log(student.marks);
console.log(student.name);
console.log(student.age);

//  for loop

var arr = [34,56,78,19];
for( var i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

for( let item of arr){
    console.log(item);
}

for(let key in student){
    console.log(key);
    // console.log(student.key);
    console.log(student[key]);
}