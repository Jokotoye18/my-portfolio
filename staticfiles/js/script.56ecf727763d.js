const menuToggler = document.querySelector('.menu-toggler');
// console.log(menuToggler);
const body = document.querySelector('body');
// console.log(body);
const projects = document.querySelector('#projects');
// console.log(projects)

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

projects.addEventListener('click', function() {
    body.classList.toggle('open-projects');
})