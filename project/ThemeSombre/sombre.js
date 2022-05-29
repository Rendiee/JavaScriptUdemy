let button = document.getElementById('theme-mode');
let moonIcon = document.getElementById('moon-icon');

if(localStorage.getItem('theme')) {
    if(localStorage.getItem('theme') === 'sombre') {
        modeSombre();
    }
}

function modeSombre() {
    document.body.className = 'dark bg-dark text-white';
    localStorage.setItem('theme', 'sombre');
}

button.addEventListener('click', () => {
    if(document.body.classList.contains('dark')){
        document.body.className = '';
        localStorage.setItem('theme', 'clair');
    }else{
        modeSombre();
    }
});