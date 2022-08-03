document.addEventListener("DOMContentLoaded", function(event) {

  scrollHeader();
  dropdown();


});


function scrollHeader() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', function(){
    header.className = window.scrollY > 50 ? 'header header--fixed': 'header';
  });
}

function dropdown() {

  const dropdown = document.querySelectorAll(".dropdown");

  dropdown.forEach(function(item) {
    const links = item.querySelectorAll('.dropdown-menu li');
    const btn = item.querySelector('.dropdown-toggle');

    item.addEventListener('click',  function() {
      this.classList.toggle("dropdown--open");
    })

    links.forEach(function(link) {

      link.addEventListener('click',  function() {
        const current = document.getElementsByClassName("dropdown-menu__item--active");
        const noSelect = item.getElementsByClassName("dropdown-menu__item--no-selected");

        btn.innerText = this.innerText;

        if(current[0]) {
          current[0].className = current[0].className.replace(" dropdown-menu__item--active", "");
        }
        this.className += " dropdown-menu__item--active";

        if(btn.innerText !== noSelect[0].innerText) {
          item.className += " dropdown--selected";
        } else {
          item.className = item.className.replace(" dropdown--selected", "");
        }
      });
    })

  })
}