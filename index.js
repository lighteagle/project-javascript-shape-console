// The Formula of Rectangle area is 
//  Area = width * length
let rectangleWidth
let rectangleLength




rectangleWidth = prompt('Enter Rectangle Width (cm) :')
rectangleLength = prompt('Enter Rectangle Length (cm) :')

let rectangleArea = rectangleWidth * rectangleLength
console.log(`
Rectangle Width  = ${rectangleWidth} cm
Rectangle Length = ${rectangleLength} cm

Rectangle Area   = Rectangle Width x Rectangle Length 
Rectangle Area   = ${rectangleWidth} cm x ${rectangleLength} cm 
Rectangle Area   = ${rectangleArea} cm2 
`)
alert(`Rectangle Area is ${rectangleArea} cm2`)