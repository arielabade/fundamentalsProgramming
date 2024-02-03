//Make the calculation of exponential numbers when two arguments are passed by the function

const exp = (basenumber,exponential) => {
	if (exponential === 0) return 1
  	else if (basenumber === 0) return 0
  		else if (exponential === 1 ) return basenumber
   else return basenumber**exp(exponential, basenumber-1) //precisa aplicar a função nela mesma
}

console.log(exp(2,2))