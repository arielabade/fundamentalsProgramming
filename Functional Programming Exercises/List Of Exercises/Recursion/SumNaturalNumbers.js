//Sum the first "x" natural numbers

const sumnatural = (x1) =>{
	if (x1===0) return 0
  else return x1 + sumnatural(x1-1)
}

console.log(sumnatural(3))