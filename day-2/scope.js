// global scope
// var
var x = 10;

// local scope
// let , const
// var -> prohibited

function printVariable() {
  console.log("this is a print statement");
}

console.log(x)

/* 
function functionName(){
    // block of statements
}
*/
function areaOfCircle(r) { 
    // find the area 
    console.log(x) // 10
    const pi = 3.14
    let area = pi * r * r
    console.log(area) // 314
}

areaOfCircle(10)
printVariable()