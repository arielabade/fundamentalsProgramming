//Function that validated if it is a triangle or not

function ftrueTriangle(a,b,c) {

  
        if  ((b + c) < a && (c+a) < b && (b+a) < c)
        return 'Triangle Exists'
        else 
            return "Triangle Does Not Exist"
        }

    
    const l1 = 3 
    const l2 = 4
    const l3 = 5
    
    // nessa parte em que se define "const" você define o que vai na função, seja um número ou algo inserido pelo usuário
    
    result = ftrueTriangle(l1,l2,l3)
    //aqui você decide qual função você vai chamar, e quais constantes serão aplicadas na função
    
    console.log(result)