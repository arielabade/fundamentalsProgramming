
//Equation between two points in a straight line using arrow function

const equationBetweenPoints = (x1,y1,x2,y2) => Math.sqrt(((x2-x1))**2 + ((y2-y1)**2))

const result = equationBetweenPoints(x1=2,y1=3,x2=-2,y2=-2)

console.log(result)
