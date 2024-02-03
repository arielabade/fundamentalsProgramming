//Calculate two possible roots from bhaskara formula



const roots = (a, b, c, f) => { 
    const delta = (b*b) - (4*a*c)
    if (delta < 0) return undefined
    const deltapositivo = ((-b) + Math.sqrt(delta)) / (2*a); // acha o valor positivo da raiz
    const deltanegativo = ((-b) - Math.sqrt(delta)) / (2*a);
        return f(deltapositivo,deltanegativo) //f tem apenas a função de aglutinar e colocar uma função dentro da outra

}

// f serve para reaplicação de função como função

const a = 1
const b = -5
const c = 6

const maiorRaiz = roots(a,b,c,(x,y) => (x>=y? x : y)) 
const menorRaiz = roots(a,b,c,(x,y) => (x<=y? x : y))  

const texto = (x,y) => x == undefined ? 'Não há raizes reais.' : `As raizes da função são ${x} e ${y}. `//esse : siginifica "ou", eu acho

console.log(texto(menorRaiz, maiorRaiz))