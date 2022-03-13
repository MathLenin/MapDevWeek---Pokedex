const listPk = document.querySelectorAll('.pokemon')
const cardPK = document.querySelectorAll('.pokecard')

listPk.forEach(pokemon => {
    pokemon.addEventListener('click', ()=> {
        const cardOpen = document.querySelector('.show')
        cardOpen.classList.remove('show')
        const idPkSelect = pokemon.attributes.id.value
        const idPkShow = 'card-' + idPkSelect
        const cardPkShow = document.getElementById(idPkShow)
        cardPkShow.classList.add('show')
        
        const listSelect = document.querySelector('.select')
        listSelect.classList.remove('select')
        const idPkList = document.getElementById(idPkSelect)
        idPkList.classList.add('select')
    })
})