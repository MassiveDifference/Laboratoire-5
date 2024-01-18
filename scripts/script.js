$(document).ready(function(){
    
    const DIFFICULTE_FACILE = 1;
    const DIFFICULTE_MOYEN = 2;
    const DIFFICULTE_DIFFICILE = 3;

    const DIFFICULTES = [DIFFICULTE_DIFFICILE, DIFFICULTE_MOYEN, DIFFICULTE_DIFFICILE];


    let grille = [];

    function genererGrille(nbLignes, nbColonnes){
        let grille = [];
        
        for (let i = 0; i < nbLignes; i++) {
            
            // Initialiser la nouvelle ligne
            let ligneCourante = [];
            
            // Ajotuer le prochain element a la nouvelle ligne
            for (let j = 0; j < nbColonnes; j++) {
                ligneCourante.push(0);
            }
            
            // Ajouter la nouvelle ligne
            grille.push(ligneCourante);
        }

        return grille;
    }

    function ajouterBombes(grille, difficulty){
        let bombes = 0;
        let cases = 0;
        switch(difficulty){
            case 1:
                bombes = 5;
                cases = 25;
                break;
            case 2:
                bombes = 30;
                cases = 100;
                break;
            case 3: 
                bombes = 140;
                cases = 400;
                break;
            default:
                break;
        }
    
        for(let i = 0; i < grille.length; i++){
            for(let j = 0; j < grille.length; j++){
                let rand = Math.random() * cases;
                if(rand < bombes && grille[i][j] != "💣"){
                    grille[i][j] = "💣"
                    bombes--;
                }
                cases--;
            }
        }
    }

    function remplirGrille(grille){

        for(let i = 0; i < grille.length; i++){
            for(let j = 0; j < grille.length; j++){
                if(grille[i][j] == "💣"){
                    for(let a = -1; a < 2; a++){
                        for(let b = -1; b < 2; b++){
                            if((i + a >= 0 && i + a < grille.length) && (j + b >= 0 && j + b < grille.length)){
                                if(grille[i + a][j + b] != "💣"){
                                    grille[i + a][j + b] += 1;
                                }   
                            }
                        }
                    }
                }
            }
        }
        console.log(grille);
    }

    function populerJeu(grille){
        let carre = $("<div class='carre'>a</div>");

        for(let i = 0; i < grille.length; i++){
            for(let j = 0; j < grille.length; j++){
                $(".jeu").append(carre.clone());
            }
        }
    }

    grille = genererGrille(5, 5);
    
    ajouterBombes(grille, DIFFICULTES[DIFFICULTE_FACILE]);
    remplirGrille(grille, DIFFICULTES[DIFFICULTE_FACILE]);
    populerJeu(grille);
});