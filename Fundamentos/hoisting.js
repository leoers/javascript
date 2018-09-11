function teste (){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

console.log('a =', a)
var a = 2
console.log('a =', a)

//Ele sobe a variavel mesmo sendo antes, mesmo dentro da função

console.log('a =', a)
let a = 2
console.log('a =', a)

// Com let não ocorre hoisting