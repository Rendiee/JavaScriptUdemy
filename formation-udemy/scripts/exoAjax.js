const url = 'https://blockchain.info/ticker'

async function getBitcoinPrice()
{

    // let requete = new XMLHttpRequest();
    // requete.open('GET', url);

    // requete.responseType = 'json';
    // requete.send();

    // requete.onload = function() {
    //     if(requete.readyState === XMLHttpRequest.DONE) {
    //         if(requete.status === 200) {
    //             let reponse = requete.response;
    //             let prixEuro = reponse.EUR.last;
    //             document.getElementById('price').textContent = prixEuro + ' €';
    //         } else {
    //             alert('Un problème est intervenu, merci de revenir plus tard.')
    //         }
    //     }
    // }
    const requete = await fetch(url, {
        method: 'GET'
    });

    if(requete.ok){
        let data = await requete.json();
        document.getElementById('price').textContent = data.EUR.last + ' €';
    }
}

getBitcoinPrice();

// setInterval(getBitcoinPrice, 1000);