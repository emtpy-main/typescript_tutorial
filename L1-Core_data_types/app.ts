// core datatypes are number, string, boolean

function add(num1 : number , num2 : number, print : boolean,message : string) {
    if(print){
        console.log("print is true");
    }
    console.log(`e6 feature backtick ${message}`);
    return num1 + num2
}


const num1 = 20;
const num2 = 30;

console.log(add(num1,num2,true,"hello world"));