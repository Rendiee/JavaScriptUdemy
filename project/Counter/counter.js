let count = 0;

let number = document.getElementById('number');
let btn = document.querySelectorAll('[data-counter]');

btn.forEach(button => {
    button.addEventListener('click', () => {
        
        let nb = button.textContent;

        switch(nb){
            case 'Decrease':
                count--;
                break;
            case 'Increase':
                count++;
                break;
            case 'Reset':
                count = 0;
                break;
            default:
                return;
        }

        if(count > 0) {
            number.style.color = 'green';
        } else if(count < 0) {
            number.style.color = 'red';
        }else {
            number.style.color = 'black';
        }

        number.textContent = count;

    });
});
