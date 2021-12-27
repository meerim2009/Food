let modalOpened = false
let m =  document.querySelector('.modal')
let closeModal = document.querySelector('.modal__close')
closeModal.onclick = ()=>{
    m.style.display ='none'
 }

 //4224-3200 = 1000 >100
window.addEventListener('scroll', () => {
    let scrollTop = document.body.scrollHeight;
    if(scrollTop - Math.floor(window.pageYOffset) <= 1000 && !modalOpened){
    m.style.display = 'block'
    modalOpened = true
    }
});
