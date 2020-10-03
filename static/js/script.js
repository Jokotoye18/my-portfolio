const menuToggler = document.querySelector('.menu-toggler');
// console.log(menuToggler);

const openProjects = document.querySelector('#projects');


menuToggler.addEventListener('click', function() {
    let body = document.querySelector('body');
    body.classList.toggle('open');
});

openProjects.addEventListener('click', function() {
    let body = document.querySelector('body');
    if (openProjects.textContent.toLowerCase() !== 'see my projects') {
        openProjects.textContent = 'see my projects';
    }else{
        openProjects.textContent = 'close projects'
    }
    body.classList.toggle('make-projects-visible');
})