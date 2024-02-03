//calculate circle area

const fareaCirc = (x,y=2,z=3.14) =>  (x**y)*z //calculate circle area with arrow function

const exec = (f, x) => f(x)

const result = exec(fareaCirc,3)



console.log(result)