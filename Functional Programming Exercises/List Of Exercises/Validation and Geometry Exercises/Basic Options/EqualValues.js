//define a function that defines which valus are not equal

function equalvalues (a,b,c) {
    if (a==b && b==c)
    return ("3 values are equal") //muito interessante
    
 
        else if (a != b && b!=c && a!=c)
        return ("No Value is equal") //você tem que pensar como computador pensaria e repassar as instruções e condições para ele
        //por isso é tão importante ter o pseudocódigo montado na cabeça, se não, você não consegue fazer nada.

        else 
            return ("Two values are equal")

}

const v1 = 3
const v2 = 3
const v3 = 3

result =  equalvalues(v1,v2,v3)

console.log(result)