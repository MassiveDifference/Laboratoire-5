$(document).ready(function(){
    
    const DIFFICULTE_FACILE = 1;
    const DIFFICULTE_MOYEN = 2;
    const DIFFICULTE_DIFFICILE = 3;

    const DIFFICULTES = [DIFFICULTE_DIFFICILE, DIFFICULTE_MOYEN, DIFFICULTE_DIFFICILE];

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
            case DIFFICULTE_FACILE:
                bombes = 5;
                cases = 25;
                break;
            case DIFFICULTE_MOYEN:
                bombes = 30;
                cases = 100;
                break;
            case DIFFICULTE_DIFFICILE: 
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

    function populerJeu(grille, difficulty){
        let carre = $("<div>a</div>");

        for(let i = 0; i < grille.length; i++){
            for(let j = 0; j < grille.length; j++){
                let carre1 = carre.clone();
                carre1.removeClass();

                carre1.text(grille[i][j]);
                
                switch(difficulty){
                    case DIFFICULTE_FACILE:
                        carre1.addClass("carreFacile");
                        break;
                    case DIFFICULTE_MOYEN:
                        carre1.addClass("carreMedium");
                        break;
                    case DIFFICULTE_DIFFICILE:
                        carre1.addClass("carreDifficile");
                        break;
                }

                switch(grille[i][j]){
                    case 1:
                        carre1.addClass("color_0");
                        break;
                    case 2:
                        carre1.addClass("color_1");
                        break;
                    case 3:
                        carre1.addClass("color_2");
                        break;
                    case 4:
                        carre1.addClass("color_3");
                        break;
                    case 5:
                        carre1.addClass("color_4");
                        break;
                    case 6:
                        carre1.addClass("color_5");
                        break;
                    case 7:
                        carre1.addClass("color_6");
                        break;
                    case 8:
                        carre1.addClass("color_7");
                        break;                     
                    default:
                        break;                                                                       
                }
                $(".jeu").append(carre1.clone());
            }
        }
    }

    function choisir(difficulty){
        let grille = [];
        switch(difficulty){
            case DIFFICULTE_FACILE:
                grille = genererGrille(5,5);
                break;
            case DIFFICULTE_MOYEN:
                grille = genererGrille(10,10);
                break;
            case DIFFICULTE_DIFFICILE:
                grille = genererGrille(20,20);
                break;
        }
        ajouterBombes(grille, difficulty);
        remplirGrille(grille, difficulty);
        populerJeu(grille, difficulty);
    }

    function clearJeu(){
        $(".jeu").empty();
    }

    $(".fac").click(function() {clearJeu(); choisir(DIFFICULTE_FACILE);});
    $(".med").click(function() {clearJeu(); choisir(DIFFICULTE_MOYEN);});
    $(".dif").click(function() {clearJeu(); choisir(DIFFICULTE_DIFFICILE);});
});