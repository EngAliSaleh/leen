let Bar = document.querySelector('nav .contanier .login .fa-bars')
let Links = document.querySelector('nav .contanier ul')


Bar.onclick = function () {
    Links.classList.toggle('show-ul');
}
