
//ARIEL LIMA ABADE BANDEIRA
//FUNÇÕES QUE INTERAGEM COM A TABELA HTML

const tabelas = []


const recursiveTabelas = (n) => {
    
    const tabela = document.querySelector(`#tabela > tr:nth-child(${n})`)
    if (tabela)  {
        tabelas.push(tabela)
        recursiveTabelas(n+1)

        
    }

    
    
}

const zerarTabelas = (n) => {
    
        if (tabelas.length > 0) {
            tabelas.pop()
            zerarTabelas(n+1)
        }

        return
}


//PEGAR AS NOTAS
const getNotas = document.querySelectorAll(".info-nota")
const copiaGetNotas =  [...getNotas].filter((x) => x == Object.keys(getNotas))
const obtainValues = copiaGetNotas.value
const listaNotas = []
const totalListaNotas = Array.from(getNotas).map((x) =>listaNotas.push(parseFloat(x.innerText)))



//PEGAR AS CARGAS HORARIAS (não funcionou por que não consegui acessar esse registro)
const getCH = document.querySelectorAll(".info-ch")
const copiagetCH=  [...getCH].filter((x) => x == Object.keys(getCH))
const obtainValuesCH = copiagetCH.value
const listaCH = []
const mostrarCH = Array.from(getCH).map((x) =>listaCH.push(parseFloat(x.innerText)))



//PEGAR AS NOTAS PARA CALCULAR DESVIO PADRAO

const getDesvioPadrao = document.querySelectorAll(".info-nota")
const copiagetDesvioPadrao = [...getDesvioPadrao].filter((x) => x == Object.keys(getDesvioPadrao))
const obtainValuesDesvioPAdrao = copiagetDesvioPadrao.value
const listaDesvioPadrao = []
const mostrarDesvioPadrao = Array.from(getDesvioPadrao).map((x) => listaDesvioPadrao.push(parseFloat(x.innerText)))


//Constantes que preenchem a tabela mas não deu tempo de alocar
const getAprovacao = document.querySelectorAll(".info-aprovacao")
const getCHTotal = document.querySelectorAll(".info-ch-total")
const getNotasDesvioPadrao = document.querySelectorAll(".info-desvio-padrao")



const attAprovacao = (n, ref) => {

    if (n < ref.length){
        getAprovacao[n].innerHTML = ref[n]
        attAprovacao(n+1, ref)


    }
}

const attCargaHoraria = (n, ref) => {
   
    
    
    if (n < ref.length){
        getCHTotal[n].innerHTML = ref[n]
        attCargaHoraria(n+1, ref)


    }
}

const attDesvioPadrao = (n, ref) => {
   
    
    
    if (n < ref.length){
        getNotasDesvioPadrao[n].innerHTML = ref[n]
        attDesvioPadrao(n+1, ref)


    }
}





//Extrai os dados da tabela
function obterNotas () {
    
    recursiveTabelas(0)
    zerarTabelas(0)
    
}
obterNotas()

/*

FUNÇÕES QUE REALIZAM OPERAÇÕES


*/


// ---- CH TOTAL CURSADA

const listaCargaHorariaTotal = [...listaCH]
const somatorioCargaHoraria = (lista) => lista.reduce((acc,x) => acc + x, 0)
const cargaHorariaTotal = somatorioCargaHoraria(listaCargaHorariaTotal)
console.log(`O total de cargaHoraria é ${cargaHorariaTotal}`)


    attCargaHoraria(0, cargaHorariaTotal)

const somatorioCargaHorariaTotal = (n) => n += cargaHorariaTotal





// ---- APROVACAO E REPROVACAO

const notasDeCorte = [...listaNotas]
const filtrarAprovados = (limiteDeAprovacao) => (lista) => lista.map((x) => x > limiteDeAprovacao ? 'APPROVED' : 'FAILED')
const aprovacaoMedia5 = filtrarAprovados(5)
const resultadoDaAprovacao = aprovacaoMedia5(notasDeCorte)
console.log(`Aqui, o aluno foi aprovado ou reprovado ${resultadoDaAprovacao}`)


    attAprovacao(0, resultadoDaAprovacao)

const taAprovado = (y) => y > 5 ? 'APPROVED' : 'FAILED'



// --- DESVIO PADRAO

const desvioPadrao = (arr) => {
    
    const mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    
    const arr2 = arr.map((k)=>{
      return (k - mean) ** 2
    })
     
    
   const sum = arr2.reduce((acc, curr)=> acc + curr, 0);
    
   return Math.sqrt(sum / arr.length)
  }
   
  const resultadoDesvioPadrao = desvioPadrao(listaDesvioPadrao)
  const desvioArredondado = (resultadoDesvioPadrao.toFixed(2))

  console.log(`O desvio padrão age sobre ${listaDesvioPadrao}`)
  console.log(`Resultado desvio padrão ${resultadoDesvioPadrao}`)
  console.log(`Resultado desvio padrão ARREDONDADO ${desvioArredondado}`)

        attDesvioPadrao(0, resultadoDesvioPadrao)

  const somatorioDesvioPadrao = (n) => n += resultadoDesvioPadrao

  
// --- MEDIA PONDERADA PELA CARGA HORARIA
//observe o reuso das duas funções acima

const  multiplicarPesos =  (arr1, arr2) =>  (arr1,arr2).map(x => x * x)
const pesosMultiplicados = multiplicarPesos([...listaNotas], [...listaCargaHorariaTotal])
const somadosPesos = (lista) => lista.reduce((acc,x) => acc+x, 0)
const somatorioDosPesos = somadosPesos(pesosMultiplicados)


/*

FIM DAS FUNÇÕES QUE REALIZAM OPERAÇÕES


*/



//FUNÇÕES QUE IMPLEMENTAM  HTML



const botaoAdicionar = document.querySelector("#adicionar-materia");
botaoAdicionar.addEventListener("click" , function(event){
    event.preventDefault();
    const form = document.querySelector("#form-adiciona");


const materia = formularioMateria(form);

const materiaTr = montarTr(materia);

const tabela = document.querySelector("#tabela");

tabela.appendChild(materiaTr);

form.reset();
});

function formularioMateria(form){
    const materia = {
        ano:form.ano.value,
        codigo:form.codigo.value,
        disciplina: form.disciplina.value,
        CH: form.ch.value,
        frequencia: form.frequencia.value,
        nota: form.nota.value,
        //aprovacao: form.notas.value

    }
    return materia;
}



const montarTr =  (materia) => {
    const materiaTr = document.createElement("tr");
    
    materiaTr.classList.add("materia");

    materiaTr.appendChild(montaTd(materia.ano, "info-ano"));
    materiaTr.appendChild(montaTd(materia.codigo, "info-codigo"));
    materiaTr.appendChild(montaTd(materia.disciplina, "info-disciplina"));
    materiaTr.appendChild(montaTd(materia.CH, "info-ch"));
    materiaTr.appendChild(montaTd(materia.frequencia, "info-frequencia"));
    materiaTr.appendChild(montaTd(materia.nota, "info-nota"));
    materiaTr.appendChild(montaTd(taAprovado(parseFloat(materia.nota)), "info-aprovacao")); 
    materiaTr.appendChild(montaTd(somatorioCargaHorariaTotal(parseFloat(materia.CH)), "info-ch-total"));
    materiaTr.appendChild(montaTd(somatorioDesvioPadrao(parseFloat(materia.desvioPadrao)), "info-desvio-padrao"));
    
    return materiaTr;
}




const montaTd = (dado,classe)  => {
    const td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);
    return td; }


    const materia = document.querySelectorAll(".materia");

    const  tabela = document.querySelector("#tabela");
    
    tabela.addEventListener("dblclick", function(event) {
        event.target.parentNode.classList.add("fadeOut");
    
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    
    });







