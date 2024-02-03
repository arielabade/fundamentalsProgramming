
//Calculate two possible roots from bhaskara formula
function lesservaluebhaskara (a,b,c) {
    return  ((-b) - Math.sqrt(b**2-4*a*c))/2*a
    
  }
  
  function highervaluebhaskara (a,b,c){
      return l3 = ((-b) + Math.sqrt(b**2-4*a*c))/2*a
      
    }

  
  const a1 = 1
  const a2 = -1
  const a3 = -6
  
  console.log(lesservaluebhaskara(a1,a2,a3))
  console.log(highervaluebhaskara(a1,a2,a3))
  