// core datatypes are number, string, boolean
function add(num1, num2, print, message) {
    if (print) {
        console.log("print is true");
    }
    console.log("e6 feature backtick ".concat(message));
    return num1 + num2;
}
var num1 = 20;
var num2 = 30;
console.log(add(num1, num2, true, "hello world"));
