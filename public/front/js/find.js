let conteudo = document.getElementById('resultado')
let pesquisado = document.getElementById('pesquisado')
let historico = document.getElementById("resultados")

function find(){
    // regex que pega apenas os valores informados retirando os hífens.
    // busca por ocorrências de hífen globalmente na palavra e troca por ''
    let novo = pesquisado.value.replace(/-/g,'')


    let pesquisar = ''
     // pegando apenas os 6 primeiros valores informados na pesquisa
    for (let i of novo){
        if (pesquisar.length == 6){
            break;
        }else{
            pesquisar += i
        }
    }
    fetch('../../data/dispositivos.json')
    .then(function (response) {
        return(response.json())
    })
    .then(function (response) {
        for(let macs of response){
            if (pesquisado.value = ''){
                break;
            }
            if (macs.mac == pesquisar ){
                conteudo.innerHTML = `<p class="mac_results">${macs.fabricante}</p>`
                break;
            } 
        }              
    })
    pesquisado.value = ''
}
