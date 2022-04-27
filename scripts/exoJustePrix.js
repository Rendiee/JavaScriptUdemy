let input = document.getElementById('prix');
let error = document.querySelector('small');
let form = document.getElementById('formulaire');

error.style.display = 'none';

let randomNumber = Math.floor(Math.random() * 101);
let coup = 0;
let nombreChoisi;

function verifier(nb){

    let div = document.createElement('div');

    if(nb < randomNumber) {
        div.textContent = '#' + coup + " ( " + nombreChoisi + " ) C'est plus !";
        div.className = 'instruction plus';
    }else if(nb > randomNumber) {
        div.textContent = '#' + coup + " ( " + nombreChoisi + " ) C'est moins !";
        div.className = 'instruction moins';
    }else{
        div.textContent = '#' + coup + " ( " + nombreChoisi + " ) Félicitation, vous avez trouvé le juste prix !";
        div.className = 'instruction fini';
        input.disabled = true;
    }

    document.getElementById('instructions').prepend(div);

}

input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }else{
        error.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isNaN(input.value) || input.value == ''){
        input.style.borderColor = 'red'; 
    }else{
        coup++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});