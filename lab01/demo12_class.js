/**
 * Define CLASS
 */

'use strict'
console.clear();


//Class
class sanpham{
    constructor(value1='id',value2='iPhone',value3='1000'){
        this.id=value1;
        this.name=value2;
        this.price=value3
    }

    getType(){
        return 'sanpham';
    }
}

let sp=new sanpham();
console.log(sp);

let sp1=new sanpham('hello','hello1','hello3');
console.log(sp1)

let sp2=new sanpham();
sp2.id=3;
sp2.name='samsung';
sp2.price='2000';
console.log(sp2);

let sp3 =new sanpham();
console.log(sp3.getType());






//Định nghĩa Class (Parents Class)
class Parents {
    //Use constructor operator to define attributes of Class
    constructor(value='anonymous'){
        this.name=value
    }

    //Getter operator
    get Name(){
        return this.name
    }

    //Setter operator
    set Name(value){
        this.name=value
    }

    getType() {
        return 'Parents'
    }
}

//Define child class extend parents class
class Child extends Parents{
    constructor(value='noname',height=100){
        super(value)   //Nếu muốn kế thừa từ Class parent
        this.height=height
    }

    get Height(){
        return this.height
    }

    set Height(height){
        this.height=height
    }

    toString(){
        return  'Name is ${this.name} with height ${this.height}'
    }

    getType(){
        return 'Child'        
    }
}


const main=()=>{
    let obj=new Parents('abcdef123')
    console.log(obj)
    obj.name='SEstudio'
    console.log(obj)
    console.log(obj.getType())

    let childObject=new Child()
    console.log(childObject)
    console.log(childObject.toString())
    console.log(childObject.getType())
}
main()




