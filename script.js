//EFEITO DO SCROLL NA BARRA DE NAVEGAÇÃO

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('nav').addClass('black')
    }
    else{
        $('nav').removeClass('black')
    }
})

//FIM DO EFEITO DO SCROLL


//HAMBURGUER MENU
const hamburguerButton = document.querySelector('.navbar-icon')
const mobileMenu = document.querySelector('.mobile-nav')

    hamburguerButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('is-active')
    })

//FIM DO HAMBURGUER MENU