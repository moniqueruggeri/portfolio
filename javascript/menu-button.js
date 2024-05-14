// animação de icone do menu
  
document.querySelector('.menu-botao').addEventListener('change', function() {
    const menuIcon = document.querySelector('.menu-icone');
    if (this.checked) {
        menuIcon.style.backgroundImage = 'url(/img/layout-elements/menu-exit.svg)';
        menuIcon.style.width = '16px';
        menuIcon.style.height = '16px';
    } else {
        menuIcon.style.backgroundImage = 'url(/img/layout-elements/menu-icon.svg)';
        menuIcon.style.width = '24px';
        menuIcon.style.height = '16px';
    }
});