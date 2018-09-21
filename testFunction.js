function add ( a, b) {
 var z = a + b
 console.log(z)
 return z
}

function subtend () {
 var z = a - b
 console.log(z)
 return z
}

function multiply() {
 var z = a * b
 console.log(z)
 return z
}

function divide () {
    var z = a / b
    console.log(z)
    return z
}

var sum = add(11, 22)
var sub = subtend(33,44)
var mul = multiply(55,66)
var div = divide(12, 43)

if (sum > mul) {
    console.log(true)
} else if (sum == mul) {
    console.log("equals")
} else {
    console.log("false")
}