(function() {
  var openBtn = document.querySelector(".header__burger button");
  var open = document.querySelector(".header__burger");
  var closeBtn = document.querySelector(".header__close button");
  var close = document.querySelector(".header__close");


  var menu = document.querySelector(".header__menu");

  var openCatalogMenu = function() {
    menu.classList.add('is-shown');
    close.classList.remove('visually-hidden');
    close.classList.add('is-shown');
    open.classList.add('visually-hidden');
    open.classList.add('is-hidden');
  }

  var closeCatalogMenu = function() {
    menu.classList.remove('is-shown');
    close.classList.add('visually-hidden');
    close.classList.remove('is-shown');
    open.classList.remove('visually-hidden');
    open.classList.remove('is-hidden');
  }

  openBtn.addEventListener("click", openCatalogMenu)
  closeBtn.addEventListener("click", closeCatalogMenu)
})();