console.log("Type Guards");

type combinable = string | number;
type numeric = number | boolean;

function add(a:combinable,b:combinable):combinable{
    if(typeof a == "string" || typeof b == "string"){
        return a.toString() + b.toString();
    }
    return a+b;
}
console.log(add(8,8));
