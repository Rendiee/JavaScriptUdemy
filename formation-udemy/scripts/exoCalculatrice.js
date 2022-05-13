let choix;
let premierNombre;
let deuxiemeNombre;
let resultat;

function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

function division(nombreA, nombreB) {     
        if(nombreB == 0){

            throw new Error("Division par 0 impossible.");

        }
          return nombreA / nombreB;
    }

do{

    choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division"));

}while(choix < 1 || choix > 4);

do{

    premierNombre = Number(prompt("Saisissez le premier nombre : "));
    deuxiemeNombre = Number(prompt("Saisissez le deuxième nombre : "));

}while(isNaN(premierNombre) || isNaN(deuxiemeNombre));

try{

switch(choix){

    case 1:
        resultat = addition(premierNombre, deuxiemeNombre);
        break;

    case 2:
        resultat = multiplication(premierNombre, deuxiemeNombre);
        break;

    case 3:
        resultat = soustraction(premierNombre, deuxiemeNombre);
        break;

    case 4:
        resultat = division(premierNombre, deuxiemeNombre);
        break;

    default:
        throw new Error("Une erreur est survenue.");

    }

    alert("Résultat : " + resultat);

}catch(error){

    alert(error);

}