var message = "hello world :)"
console.log(message);
console.assert(1 === 2);

function isEven(x) {
    var remainder = x % 2;
    if(remainder === 0){
        return true;
    }
}


console.assert(isEven(2) === true)
console.assert(isEven(22) === true) 
console.assert(isEven(3) === false)

function isOdd(x) {
    var remainder = x % 2;
    if(remainder !== 0){
        return true;
    } else {
        return false;
    }
}


console.assert(isOdd(1) === true)
console.assert(isOdd(-4) === false) 
console.assert(isOdd(3) === true)

// adds shipping cost 10% of item
// sum * .10

var PERCENT_SHIPPING = 0.1

function addShipping(x) {
    return x + (x * PERCENT_SHIPPING)
}


console.assert(addShipping(10) === 11)
console.assert(addShipping(20) === 22)
console.assert(addShipping(30) === 33)


// adds shipping cost 20% of item
// sum * .2

var PERCENT_SHIPPING = 0.2;

function addShipping(x) {
    return x + (x * PERCENT_SHIPPING);
}


console.assert(addShipping(10) === 12)
console.assert(addShipping(20) === 24)
console.assert(addShipping(30) === 36)


var HANDLING = 4;

function addHandling(x) {
    return (x + HANDLING);
}

console.assert(addHandling(10) === 14)
console.assert(addHandling(20) === 24)
console.assert(addHandling(30) === 34)



// adds shipping cost 20% of item
// sum * .2

var PERCENT_SHIPPING = 0.2;
var HANDLING = 4;

function addShipping(x) {
    return (x * PERCENT_SHIPPING);
}


console.assert(addShipping(10) === 2)
console.assert(addShipping(20) === 4)
console.assert(addShipping(30) === 6)




function addHandling(x) {
    return HANDLING
}

console.assert(addHandling(1) === 4)
console.assert(addHandling(20) === 4)
console.assert(addHandling(30) === 4)

var SHIPHAND = addHandling + addShipping

function addShipHand(x) {
     return x + addHandling(x) + addShipping(x)
}

console.assert(addShipHand(10) === 16)
console.assert(addShipHand(20) === 28)
console.assert(addShipHand(30) === 40)

// try adjusting cost