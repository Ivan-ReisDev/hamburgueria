// Adiciona a classe 'active' ao link atualmente selecionado
// Onload 
function loading() {
    document.querySelector('#preloader');
    preloader.style.display = 'none';
    document.querySelector('#content');
    content.style.display = 'block';
}
// menu sidebar 

var $btnOpen = document.querySelector("#btn-open");
var $navList = document.querySelector('#nav-list');
var $icon = document.getElementById('icon');
var sidebar = false;

function btn() {
    sidebar = true;
    if (sidebar) {
        console.log(sidebar)
        $navList.style.transform = "translate(0%)";
    } 
}

function btnClose() {
   sidebar = true;
    if (sidebar) {
        console.log(sidebar)
        $navList.style.transform = ""
    }
}
// -------------Carrossel --------------
$('.carrossel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
});
