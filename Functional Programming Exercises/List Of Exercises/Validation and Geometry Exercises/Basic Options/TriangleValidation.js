
//See if a triangle is valid or not

function ftrueTriangle(a,b,c) {

        if  ((b + c) < a && (c+a) < b && (b+a) < c)
        return 'Triangle Exists'
        else 
            return "Triangle Does Not Exist"
        }
   
    
    const l1 = 3
    const l2 = 4
    const l3 = 5
    
    
    
    result = ftrueTriangle(l1,l2,l3)
    
    
    console.log(result)