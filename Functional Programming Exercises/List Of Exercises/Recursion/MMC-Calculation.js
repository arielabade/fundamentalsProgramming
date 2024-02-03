//Calculate MMC

const mdc = (n, m) => {
	if (n>m) return mdc(m,n)
  	else if (n==0) return m
    	else return mdc(n, m-n)
}



const mmc = (n,m) => {
	return (n * (m/  mdc(n,m)))
  
  }
    
 
    
console.log(mmc(2,8))
