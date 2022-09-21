function btn(){
  const nav = document.querySelector('.menu')
  nav.classList.toggle('ativo')
}

const ativo = document.querySelectorAll('.menu ul li')


function clicado(e){
    classList.remove('borda')
    e.currentTarget.classList.add('borda')
    console.log(e.currentTarget)

}

ativo.forEach((ab) =>{
  ab.addEventListener('click', clicado)
})