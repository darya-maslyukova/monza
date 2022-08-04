document.addEventListener("DOMContentLoaded", function(event) {

  scrollHeader();
  dropdown();
  toggleClassAccordion();
  emptyInputClass();
  dropdownMenu();
});

function emptyInputClass() {
  const emailID = document.getElementById('subscribeEmail');
  emailID.classList.add('input-empty')

  emailID.addEventListener('input', function(event) {
    if(event.target.value) {
      emailID.classList.remove('input-empty')
    } else  {
      emailID.classList.add('input-empty')
    }
  })
}

function toggleClassAccordion() {

  $('#accordionFaq').on('show.bs.collapse', function (event) {
      event.target.parentNode.classList.add("accordion-item--open");
    }).on('hidden.bs.collapse', function (event) {
      event.target.parentNode.classList.remove("accordion-item--open");
  })
}


function scrollHeader() {
  const header = document.querySelector('header');

  window.addEventListener('scroll', function(){
    header.className = window.scrollY > 50 ? 'header header--fixed': 'header';
  });
}

function dropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function(item) {
    const links = item.querySelectorAll('.dropdown-menu li');
    const btn = item.querySelector('.dropdown-toggle');

    item.addEventListener('click',  function() {
      this.classList.toggle("dropdown--open");
    })

    links.forEach(function(link) {

      link.addEventListener('click',  function() {
        const current = document.getElementsByClassName("dropdown-menu__item--active");
        const noSelect = item.getElementsByClassName("dropdown-menu__item--no-selected");

        console.log(link.innerText);
        btn.innerText = this.innerText;
        btn.innerHTML += link.innerText.includes('ascending') ? '<span class="caret caret--asc"></span>'
          : link.innerText.includes('descending') ? '<span class="caret caret--desc"></span>' : '<span class="caret"></span>'

        if(current[0]) {
          current[0].className = current[0].className.replace(" dropdown-menu__item--active", "");
        }
        this.className += " dropdown-menu__item--active";

        if(noSelect[0]) {

          if(btn.innerText !== noSelect[0].innerText) {
            item.className += " dropdown--selected";
          } else {
            item.className = item.className.replace(" dropdown--selected", "");
          }
        }

      });
    })

  })
}

function dropdownMenu(){

  document.querySelector('.menu-toggle__btn').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('opened');
    document.querySelector('.header-nav').classList.toggle('header-nav--mobile');
    document.body.classList.toggle('overflow');
  });

}