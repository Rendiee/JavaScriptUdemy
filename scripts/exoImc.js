let poids = prompt("Entré votre poids en kg : ");
let taille = prompt("Entré votre taille en mètre : ");

function calculerIMC(poids, taille){

    let imc = poids / Math.pow(taille, 2);
    return imc;
}

alert("Votre imc est : " + calculerIMC(poids, taille));