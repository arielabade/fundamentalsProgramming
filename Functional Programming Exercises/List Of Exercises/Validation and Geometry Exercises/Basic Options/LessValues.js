//Define a function that defines which numbers are smaller

function minimun (a,b,c ){
    if (a<b && b<c)
    return (`${a} is smaller than ${b}, and, by consequence, smaller than ${c}`)

    if (b<a && a<c)
    return (`${b} is smaller than ${a}, and, by consequence, smaller than ${c}`)

    if (c<b && b<a)
    return (`${c} is smaller than  ${b}, and, by consequence, smaller than ${a}`)

    else (a==b && b==c)
    return(`Type Differente Values, You Tipped equal values`)
}


resultado = minimun(a=3,b=4,c=5)

console.log(resultado)