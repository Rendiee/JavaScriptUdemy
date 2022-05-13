class Personnage {

    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    evoluer() {
        this.niveau++;
        return this.pseudo + ' passe au niveau ' + this.niveau + ' !';
    }

    verifierSante() {
        if(this.sante <= 0){
            this.sante = 0;
            return this.pseudo + ' a perdu !';
        }
    }

    informations() {
        return 'Le ' + this.classe + ' ' + this.pseudo + ' a ' + this.sante + ' points de vie et est au niveau ' + this.niveau;
    }

}

class Magicien extends Personnage {
    constructor(pseudo, classe, sante, attaque) {
        super(pseudo, classe, sante, attaque);
    }

    attaquer(Personnage) {
        Personnage.sante -= this.attaque;
        this.evoluer();
        Personnage.verifierSante();
        return this.pseudo + ' attaque ' + Personnage.pseudo + ' en lançant un sort (' + this.attaque + ' dégats)';
    }

    coupSpecial(Personnage) {
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        this.evoluer();
        Personnage.verifierSante();
        return this.pseudo + ' attaque avec son coup spécial puissance des arcanes ' + Personnage.pseudo + ' (' + (this.attaque * 5) + ' dégats)';
    }
}

class Guerrier extends Personnage {
    constructor(pseudo, classe, sante, degat) {
        super(pseudo, classe, sante, degat);
    }

    attaquer(Personnage) {
        Personnage.sante -= this.attaque;
        this.evoluer();
        Personnage.verifierSante();
        return this.pseudo + ' attaque ' + Personnage.pseudo + ' avec son épée (' + this.attaque + ' dégats)';
    }

    coupSpecial(Personnage) {
        Personnage.sante = Personnage.sante - (this.attaque * 5);
        this.evoluer();
        Personnage.verifierSante();
        return this.pseudo + ' attaque avec son coup spécial haches de guerre ' + Personnage.pseudo + ' (' + (this.attaque * 5) + ' dégats)';
    }
}

let creer = document.getElementById('creer-personnage');
let listPerso = document.getElementById('list-perso');

let errorClasse = document.getElementById('error-classe');
let errorChamp = document.getElementById('error-champ');
let errorNbPerso = document.getElementById('error-nb-perso');

let pseudo = document.getElementById('pseudo');
let classe = document.getElementById('list-class');
let sante = document.getElementById('sante');
let degat = document.getElementById('degat');

let btnAttack = document.getElementById('attack');

let listInfo = document.getElementById('list-info');

btnAttack.style.display = 'none';
errorChamp.style.display = 'none';
errorNbPerso.style.display = 'none';

let nbPerso = 0;
let perso = [];

function createTextInfo(text, classname){
    let p = document.createElement('p');
    p.textContent = text;
    p.className = classname;
    return p;
}

function createCard(nbPerso, name, classe, sante, degat){
    let card = document.createElement('div');

    let t = document.createElement('p');
    t.textContent = 'Personnage n°' + nbPerso;
    let n = document.createElement('div');
    n.textContent = 'Nom : ' + name;
    let cl = document.createElement('div');
    cl.textContent = 'Classe : ' + classe;
    let s = document.createElement('div');
    s.textContent = 'Santé : ' + sante;
    let d = document.createElement('div');
    d.textContent = 'Attaque basique : ' + degat + ' dégats';
    let co = document.createElement('div');
    co.textContent = 'Coup spécial : ' + (degat * 5) + ' dégats';

    t.className = 'title-card';
    card.className = 'card';
    card.setAttribute('id', name);

    card.append(t,n,cl,s,d,co);

    return card;  
}

creer.addEventListener('click', () => {

    if(nbPerso != 2) {

        if(pseudo.value != '' && classe.value != '' && sante.value != '' && degat.value != ''){

            if(classe.value == 'Magicien'){
                nbPerso++;

                var m = new Magicien(pseudo.value, classe.value, sante.value, degat.value);
                listPerso.append(createCard(nbPerso, m.pseudo, m.classe, m.sante, m.attaque));

                perso.push(m);

                if(nbPerso == 2){
                   btnAttack.style.display = 'inline';
                }
        
            }else if(classe.value == 'Guerrier'){
                nbPerso++;

                var g = new Guerrier(pseudo.value, classe.value, sante.value, degat.value);
                listPerso.append(createCard(nbPerso, g.pseudo, g.classe, g.sante, g.attaque));

                perso.push(g);

                if(nbPerso == 2){
                    btnAttack.style.display = 'inline';
                 }

            }

        }else{
            errorChamp.style.display = 'inline';
        }
    }else {
        errorNbPerso.style.display = 'inline';
    }
});


let attack = document.getElementById('attack');
attack.addEventListener('click', () => {
    listInfo.append(createTextInfo(perso[0].informations(), 'background-text text-info'));
    listInfo.append(createTextInfo(perso[1].informations(), 'background-text text-info'));
    listInfo.append(createTextInfo(perso[0].attaquer(perso[1]), 'background-text text-attack'));
    listInfo.append(createTextInfo(perso[1].informations(), 'background-text text-info'));
    listInfo.append(createTextInfo(perso[1].attaquer(perso[0]), 'background-text text-attack'));
    listInfo.append(createTextInfo(perso[0].informations(), 'background-text text-info'));

});


