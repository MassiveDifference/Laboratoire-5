function genererGrille(nbLignes, nbColonnes){
    let grille = [];

    for (let i = 0; i < nbLignes; i++) {
        grille[i] = [];
        for (let j = 0; j < nbColonnes; j++) {
            grille[i][j] = 0;
        }
    }
    console.log(grille);

}

genererGrille(5, 5);