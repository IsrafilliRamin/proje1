const button = document.querySelector('.svg');
const barmenu = document.querySelector('.barmenu');
const x = document.querySelector('.x')

button.addEventListener('click',()=>{
    barmenu.style.left='0px'
})

x.addEventListener('click',()=>{
    barmenu.style.left='-100%'
})