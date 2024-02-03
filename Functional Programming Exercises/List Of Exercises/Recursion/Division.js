//Make a division operation with recursion

const quociente = (n) => (m) => { 
    if (n<m) return 0
        else return 1+quociente(n-m)(m)
}
    const val1 = 31
    const val2 = 7
    console.log(`${val1}/${val2} = ${division(val1)(val2)}`) 