//Function that invert the string order

const inverte = (str) =>{
	if (str == '') return str
  else return  inverte(str.slice(1)) + str[0]

}
  console.log(inverte('Dois'))