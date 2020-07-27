function changeIcon() {
    let toggle = document.querySelector('#toggle');
    if (toggle.className === 'fa fa-bars color') {
        toggle.className = 'fa fa-times color';
    }else {
        toggle.className = 'fa fa-bars color';
    }
}