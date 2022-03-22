/**
 * Define CLASS
 */

'use strict'
console.clear();

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
}


const main=()=>{
    let obj=new Parents('abcdef123')
    console.log(obj)
    obj.name='SEstudio'
    console.log(obj)
}
main()

