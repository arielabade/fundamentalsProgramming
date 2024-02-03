//define a function that sses if the triangle exists or not
function ftrueTriangle(a,b,c) {

        if  ((b + c) < a && (c+a) < b && (b+a) < c){//como eu coloco um processo de validação duplo na questão dos triângulos?
            
            if(a==b && b ==c)
            return 'The three sides are equal" //isso aqui é uma definição matemática que se usa para programar, muito doido'

            else if(a==b && c!=a || a==c && b!=a || b==c && a!=b )
            return "Only two sides are equal"

            else if(a!=b && b!=c && c!=a)
            return "Three sides are equal"}
        
        else 
        return "Triangle Does Not Exist"}
        
            
    
const l1 = 3 
const l2 = 3
const l3 = 3
    
    
    
    result = ftrueTriangle(l1,l2,l3)
    //aqui você decide qual função você vai chamar, e quais constantes serão aplicadas na função
    
    console.log(result)