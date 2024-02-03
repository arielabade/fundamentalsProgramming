//Sum the list with recursion

const indef = y => typeof y == 'undefined'

const sum = ([x, y, ...xs]) =>{
    if (indef(y)) return x
    else return  sum([x+x, ...xs])

}

console.log(sum([3,8,20,21,34,44])) //soma todos os elementos da lsita, que pode ser uma sublista tb

//pega todos os elementos anteriores