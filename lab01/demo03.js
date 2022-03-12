/**
 * Chuyển đổi kiểu dữ liệu cho biến
 */

let number=100; //kiểu số nguyên interger
console.log("a = ",number);

number="Hello"; //Kiểu chuỗi string
console.log('number = ',number);

let b=1;
let c=2;
let d=b+c;
console.log(d);

let bs='1';
let cs='2';
let ds=bs+cs;
console.log(ds);

//Chuyển dổi chuỗi string thành số interger
number=parseInt('123.45');
console.log('(int)number = ',number);

//Chuyển đổi chuỗi sting thành số thực float
number=parseFloat('123.45');
console.log('(Float)number = ',number);