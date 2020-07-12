/*Estilização Nivo-Slider*/
$(window).load(function() {
    $('#slider').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: false,
    controlNavThumbs: true,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: 'Prev',
    nextText: 'Next',
    randomStart: false,
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){},
    lastSlide: function(){},
    afterLoad: function(){}
    });
});

/*Menu Hamburguer*/

const hamburguer = document.querySelector('.hamburguer')
const nav_ul = document.querySelector('.menu')

hamburguer.addEventListener('click',function(){
    nav_ul.classList.toggle("ativo")
    if(sub_menu.classList.contains('ativo') || sub_menu2.classList.contains('ativo')){
        sub_menu.classList.remove("ativo")
        sub_menu2.classList.remove("ativo")
    }
})

/*Submenu 1 Responsivo*/

const empresa = document.getElementById("empresa")
const sub_menu = document.getElementById("sub-menu-1")

empresa.addEventListener('click',function(){
    sub_menu.classList.toggle("ativo")

})

/*Submenu 2 Responsivo*/

const submenu = document.getElementById("submenu")
const sub_menu2 = document.getElementById("sub-menu-2")

submenu.addEventListener('click',function(){
    sub_menu2.classList.toggle("ativo")
})

