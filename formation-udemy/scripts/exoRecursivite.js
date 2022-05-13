function somme(nombre) {

    if(nombre == 1){
        return 1;
    }

    return nombre + somme(nombre - 1);

}

alert(somme(5));