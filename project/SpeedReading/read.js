let textSpeedRead = document.querySelectorAll('[data-speed-reading]');
let e = document.getElementById('test');
let r = document.getElementById('remplacer');

function isNumber(val) {
    return /[0-9]/gm.test(val);
}

function containBracket(val) {
    return /[(]/gm.test(val);
}

function getFirstsLetterOfWord(word) {
    return word.slice(0, String(word).length / 2);
}

textSpeedRead.forEach(text => {
    if(text.getAttribute('data-speed-reading') == 'true'){

        let p = '';
        text.textContent.split(' ').map(word => {

            let g;
            let w;

            if(isNumber(word)) {

                let n = '<span class="rest-word">' + word + "</span> ";
                w = [n];
                p = p + w;

            } else {

                g = word.slice(0, word.length / 2);

                let first;
                let second;

                if(containBracket(word)) {

                    first = '<span class="rest-word">(</span><span class="color-read">' + g.substring(1) + '</span>';
                    second = '<span class="rest-word">' + word.slice(String(g.substring(1)).length + 1) + '</span> ';

                } else {

                    first = '<span class="color-read">' + g + '</span>';
                    second = '<span class="rest-word">' + word.slice(String(g).length) + '</span> ';

                }          

                w = [first, second];
                p = p + w.join('');

            }

            
        })
        text.innerHTML = p;        
    }
});