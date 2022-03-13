/**
 * Array trong ES
 */

'use strict'

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