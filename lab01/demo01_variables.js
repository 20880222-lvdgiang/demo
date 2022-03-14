/**
 * Khai báo biến trong ngôn ngữ JavasScript -> ECMA Script (ES)
 */
console.log("Hello World!");

//Khai báo hằng số
const a=100;
console.log("const a = ",a);

//Khai báo biến toàn cục và cục bộ trong Code Block
let b=10;
var c=1;

console.log("let b = ",b);
console.log("var c = ",c);

//Kiểm tra sự khác nhau giữa const, let, var
//a=99; Lỗi vì không thể thay đổi giá trị của hằng số 

b=999;
c=888;
console.log("let b = ",b);
console.log("var c = ",c);

flag=true;
if(flag==true)
{
    console.log("=> a = ",a);
    console.log("=> b = ",b);
    console.log("=> c = ",c);

    const d=777; // --> Khai báo bằng số, biến cục bộ trong code block
    let e=666; // --> Khai báo biến cục bộ trong code block
    var f=555; // --> Khai báo biến toàn cục, có thể truy suất bên ngoài code block

    console.log("=> d = ",d);
    console.log("=> e = ",e);
    console.log("=> f = ",f);
}

//console.log("=> d = ",d);
//console.log("=> e = ",e);
console.log("=> f = ",f); // --> biến toàn cục nên có thể truy suất ở bên ngoài code block