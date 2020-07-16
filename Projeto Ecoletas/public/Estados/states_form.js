function populateState() {

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                document.getElementById('inputState').innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateState();



function populateCity(event) {
    const cidades = document.getElementById('inputCity')
    const inputState = document.getElementById('state')

    const ufValue = event.target.value

    const indexOfSeletectedState = event.target.selectedIndex

    inputState.value = event.target.options[indexOfSeletectedState]

    cidades.innerHTML=''
    cidades.disabled = true

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                cidades.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            cidades.disabled = false

        })
}

const inputState = document.getElementById('inputState')

inputState.addEventListener('change', populateCity)


//ITENS DE COLETA

const ascenderItem = document.querySelectorAll('.imagensLixo li')



for(const item of ascenderItem){
    item.addEventListener("click", selecionarLixo)
}

const itemColetado = document.getElementById('itens')

let selectItems = []

function selecionarLixo(event){
const itemLi= event.target

itemLi.classList.toggle('selected')

const itemId = event.id

const itensSelecionado = selectItems.findIndex(item=>{
    const itemFound = item == itemId
    return itemFound
})

if(itensSelecionado >= 0){
    const itensFiltrado = selectItems.filter(item =>{
        const itemDiferent = item != itemId
        return itemDiferent
    })

    selectItems = itensFiltrado
}else{
    selectItems.push(itemId)
}

itemColetado.value = selectItems 
}

