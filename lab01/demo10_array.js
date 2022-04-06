/**
 * Array trong ES
 */

'use strict' //có thể bỏ dấu ; sau câu lệnh

console.clear();

//Khai báo mảng 1 chiều (array)
let a=[1,2,3,4,5]

console.log("Print array");
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log(a);

console.log("Print array with array object method");
a.forEach(item=>{
    console.log(item)
})

console.log("Đảo mảng");
a.reverse();
console.log(a);
a.reverse();
console.log(a);

console.log("Thêm phần tử vào mảng");
a.push(99);
console.log(a);

console.log("Xóa phần tử trong mảng");
a.splice(2,1); //Xóa tại vị trí số 2, xóa 1 phần tử
console.log(a);
a.splice(2); //Xóa tại vị trí số 2 trở đi
console.log(a);



a=[1,2,99,3,4,5]
console.log("Sort operator");
a.sort();
console.log(a);

//insert or remove object
console.log("Insert or Remove Object");
a.push(88,66,[1,2,3]);
console.log("a = ",a);
console.log("pop - lấy phần tử cuối ra");
let b=a.pop();
console.log("a = ",a);
console.log("b = ",b);
console.log("Insert each item from array to array");
a.push(...[11,22,33]);
console.log("a = ",a);
console.log("Lấy phần tử cuối ra");
b=a.pop();
console.log("a = ",a);
console.log("b = ",b);

console.log("SHIFT and UNSHIFT");
console.log("Đưa phần tử vào đầu mảng");
a.unshift(999);
console.log("a = ",a);
console.log("Lấy phần tử đầu mảng ra");
b=a.shift();
console.log("a = ",a);
console.log("b = ",b);

a.unshift(888)
console.log('a=',a)

let c=a.shift()
console.log("c=",c)