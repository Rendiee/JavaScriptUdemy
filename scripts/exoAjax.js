const url = 'https://blockchain.info/ticker'

function getBitcoinPrice()
{

    let requete = new XMLHttpRequest();
    requete.open('GET', url);

    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if(requete.readyState === XMLHttpRequest.DONE) {
            if(requete.status === 200) {
                let reponse = requete.response;
                let prixEuro = reponse.EUR.last;
                document.getElementById('price').textContent = prixEuro + ' €';
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.')
            }
        }
    }
}

setInterval(getBitcoinPrice, 1000);