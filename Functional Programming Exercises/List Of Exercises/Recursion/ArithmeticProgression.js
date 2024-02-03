//Find the term passed as argument \{2,7,12,17,22,...\}{2,7,12,17,22,...}

const f = (n) => {
    if (n==1) {
        return 2} //definição do caso base a partir do índice estabelecido pela função

    else {
        return f(n-1)+5 //função definida a partir da sequência estabelecida, esse código é lindp

    } //note que f é a própria constante, que também é estabelecida como uma função
}

console.log(f(3))