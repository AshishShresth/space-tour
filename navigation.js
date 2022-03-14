const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    // navToggle.style = 'background-image: url(./assets/shared/icon-close.svg)';
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    // navToggle.style =
    //   'background-image: url(./assets/shared/icon-hamburger.svg)';
  }
  console.log(navToggle.getAttribute('aria-expanded'));

  //   const ariaExpanded = navToggle.getAttribute('aria-expanded');
  //   if (ariaExpanded === 'false') {
  //     navToggle.setAttribute('aria-expanded', true);
  //   } else {
  //     navToggle.setAttribute('aria-expanded', false);
  //   }
  //   console.log(ariaExpanded);
  //   console.log(visibility);
});
