/**
 * Define Object literals with JSON Objects
 */

'use strict'
console.clear();

let a=3;
let obj_a={a}
console.log('obj_a = ',a)

let b=4
let obj_b={b:b}
console.log('obj_b = ',b)

let student={
    'SID':1,
    'Name':'HoTenSinhVien'
}
console.log(student)

let array_1=[1,2,3,4,5]
console.log(array_1)

let array_2=[{value:1},{value:2},{value:3}]
console.log(array_2)

let array=[
    {
        value:1,
        name:'iPhone'
    },
    {
        value:2,
        name:'iPad'
    },
    {
        value:3,
        name:'macBook'
    }
]
console.log(array)


//define object look like class
let obj={
    value:100,
    double(){
        return this.value*2
    },
    square:function(){
        return this.value*this.value
    },
    triple:()=>{
        return obj.value*3      //Lưu ý dùng 'this.value' sẽ lỗi
    }
}
console.log(obj)
console.log('obj ',obj)
console.log('obj.value: ',obj.value)
console.log('obj double operator: ',obj.double())
console.log('obj square operator: ',obj.square())
console.log('obj triple operator: ',obj.triple())

//convert JSON object to String
console.log(array)
let str_array=JSON.stringify(array)
console.log(str_array)

let obj_str_array=JSON.parse(str_array)
console.log(obj_str_array)

//Nested object
let list_of_products=[
    {
        id:1,
        name:'iphone',
        model:[
            {
                memory:256,
                type:'pro Max'
            },
            {
                memory:512
            }
        ]
    },
    {
        id:2,
        name:'iPad'
    }
]
console.log(list_of_products)
console.log(list_of_products[0].model[0].type)