const fechando = document.getElementById('fecha')
const modals = document.getElementById('modal')

const openModal = document.getElementById('abre')

openModal.addEventListener('click',()=>{
   modals.classList.toggle('hide')
})

fechando.addEventListener('click',()=>{
    modals.classList.toggle('hide')
})

// openModal.addEventListener('click',()=>{
//     modals.add()
// })
