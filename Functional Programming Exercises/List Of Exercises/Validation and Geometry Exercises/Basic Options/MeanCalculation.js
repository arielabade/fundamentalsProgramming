//Calculate mean and print which values are higher than the calculated mean 
function values (a,b,c) {
    return ((a+b+c)/3)
    
    //(`${a} é maior que ${b}`)

}

function printhigher (a,b,c){
    if (a && b && c > values)
    return (`3 values are higher than the given mean`)

    else (a && b || b && c || c && a > values)
    return ('2 values are higher than the given mean')
  
}

const v1 = 7
const v2 = 6
const v3 = 9

result1 = values(v1,v2,v3)
result2 = printhigher(v1,v2,v3)
console.log(result1)
console.log(result2)