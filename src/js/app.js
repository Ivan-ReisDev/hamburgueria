// Adiciona a classe 'active' ao link atualmente selecionado

// Onload 
function loading() {
    document.querySelector('#preloader');
    preloader.style.display = 'none';
    document.querySelector('#content');
    content.style.display= 'block';
}
// menu sidebar 

var $btnOpen = document.querySelector("#btn-open");
var $navList = document.querySelector('#nav-list');
var $icon = document.getElementById('icon');
var sidebar = false;

function btn(){
    sidebar = !sidebar;
    if(sidebar) {
        $navList.style.transform = "translate(0%)";
        $icon.classList.toggle("fa-bars")
        $icon.classList.toggle("fa-xmark")
    } else {
        $navList.style.transform = ""
        $icon.classList.toggle("fa-xmark")
        $icon.classList.toggle("fa-bars")
        
    }
}
// -------------Carrossel --------------
$('.carrossel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
});
