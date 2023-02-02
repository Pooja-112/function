//function scope
function sum()
{
    var x =10,
    y= 5,
    total = x+y;
    console.log(total)
}
sum()

//global scope
var x1 =10;
 var y1 = 20;
function sum(){
    z = x1+y1
    console.log(z)
}
sum()


//anonymous function
let add = function(a,b)
{   
    return a+b
}
let c = add(1,2)
console.log(add)
;

//arrow function
const add1 =(a1)=> console.log(a1 +100);
add1(10)
