let hidden = true;
let btn = document.getElementById('button-spoiler');
let container = document.getElementById('container');

let textHide = document.createElement('p');
textHide.textContent = 'Le texte caché.';

btn.addEventListener('click', () => {
    if(hidden)
    {
        btn.textContent = 'Cacher';
        container.append(textHide);
        hidden = false;
    }else{
        btn.textContent = 'Afficher';
        container.removeChild(textHide);
        hidden = true;
    }
});