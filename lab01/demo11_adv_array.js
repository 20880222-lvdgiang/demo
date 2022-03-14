/**
 * Advance array in ES
 */

'use strict'
console.clear();

//Hàm cao cấp
let a=[0,1,2,3,4,5,6,7,8,9];
console.log("a = ",a);

//In từng phần tử Foreach
console.log("------ForEach---------")
a.forEach(item=>console.log(item));
console.log("--------lấy giá trị-----------");
a.forEach((item,index) => {
    console.log("item ",index,"= ",item);
});
console.log("---------lấy vị trí và giá trị----------");
a.forEach((item,index) => {
    console.log("item ",index,"= ",item*2);
});

//Lấy giá trị các phần tử với Map
console.log("------Map-------");
a.map(item=>{
    console.log(item);
})

console.log("-----------------------");
let b=a.map(item=>{
    return item;
})
console.log("b = ",b);

console.log("-----------------------");
    b=a.map(item=>{
    return item*2;
})
console.log("b = ",b);

//Filter điều kiện
console.log("-----Filter-------");
a.forEach(item=>{
    if(item%2===0)
    console.log(item);
})

console.log("----------------");
b=a.filter(item=>item%2===0)
console.log("b = ",b);

console.log("-----Filter với Reduce-------");
console.log("a = ",a);
let sum=a.reduce((result, item)=>{
    return result+item;
},0)
console.log("sum = ",sum);

console.log("------------------------");
console.log("a = ",a);
sum=a.reduce((result, item)=>{
    return result+item;
},10)
console.log("sum = ",sum);

console.log("------------------------");
console.log("a = ",a);
sum = 0;
a.forEach(item=>{
    sum+=item;
})
console.log("sum = ",sum);

console.log("------------------------");
console.log("a = ",a);
sum=a.reduce((result,item)=>{
    return result+item;
},0)
console.log("sum = ",sum);