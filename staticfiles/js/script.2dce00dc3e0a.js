const menuToggler = document.querySelector('.menu-toggler');
console.log(menuToggler);

menuToggler.addEventListener('click', function() {
    const body = document.querySelector('body');
    console.log(body);
    body.classList.toggle('open');
});