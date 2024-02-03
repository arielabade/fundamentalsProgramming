//Square a number by two reusing pre-defined functions

const squared = (x) => squaredByTwo(squaredByTwo(x)) 
const squaredByTwo = x => x**2
const l1 = 2

result = squared(l1) /
console.log(result)

