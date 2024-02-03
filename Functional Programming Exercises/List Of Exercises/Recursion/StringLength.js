
//Implemention of javascript length function
const tamanho = (string) => {
    if (string === '') return 0
    
        else {
        
              return 1 + length(string.slice(1))
    
        
    }
    }
    
    console.log(length("Olá!"))