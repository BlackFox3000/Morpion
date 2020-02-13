//(16)bonus morpion (3 croix)------------------------------------

    //tab T [5x5] de 0 à 4)
/**
 *
 * @param tab
 * @returns {*}
 */
function initialisationMorpion(tab, length) {
        for (let i = 0; i < length; i++) {
            tab[i]=[];
            for (let j = 0; j < length; j++) {
                tab[i][j] = 0;
            }
        }
        console.log(tab);
        return tab;
    }

/**
 *
  * @param tab
 */
function printTabHtml(tab) {
    var print='<table>';
    for(var i=0; i<tab.length; i++){
        print+='<tr>';
        for (let j = 0; j < tab[i].length; j++) {
            if(tab[i][j]==0)
                print+='<td id="zero"><div>'+tab[i][j]+'</div></td>';
            if(tab[i][j]==1)
                print+='<td id="un"><div>'+tab[i][j]+'</div></td>';
        }
        print+='</tr>';
    }
    print+='</table><br>';

    //var resultat = '<h2>Mon Resultat</h2>';
    document.getElementById('print').innerHTML = print;
    //console.log(print);
}

//obtenir un chiffre random entee 0 et max
    function getRandomInt(max) {
        var result=Math.floor(Math.random() * Math.floor(max));
        console.log(result);
        return result;
    }

// Mettre 10 "1" dans le tableau aleatoirement
    function remplissageMorpion(tab){
        var sum=0;
        while(sum<10)
        {
            for(let i=0; i<tab.length; i++){

                for(let j=0; j<tab[i].length; j++){

                    if( getRandomInt(2)==0 && tab[i][j]!=1 && sum<10){
                        //console.log(i);
                        tab[i][j]=1;
                        sum++;
                    }
                }
            }

        }
        return tab;
        console.log(tab);
    }



    //comptabilisé le nombre de fois où nombCroix "1" sont alignés
    function scoreMorpion(tab,nombCroix){
        var i=0, j=0, point=0;
        var d=tab.length;
        var limTab=nombCroix-1;
        var dj= tab[i].length;
        while(i<d && j<dj){
            document.getElementById('historic').innerHTML += '[i: '+i+' j: '+j+' dj:'+ dj+' ] <br>';
            //si la case vaut 1 on test
            if(tab[i][j]==1){
                //test si il es possible d'avoir une diagonale droite
                if( j+limTab<dj && i+limTab<d){
                    //test diagonale droite
                    if(diagRithIsValide(tab,i,j,nombCroix))
                        point++;
                }
                //test si il es possible d'avoir une diagonale gauche
                if( j-limTab>=0 && i+limTab<d){
                    //test diagonale gauche
                    if(diagLeftIsValide(tab,i,j,nombCroix))
                        point++;
                }
                //test si iles possible d'avoir une ligne horizontale
                if( j+limTab<dj ){
                    //tester si ligne horizontale
                    if(lignHorIsValide(tab,i,j,nombCroix))
                        point++;
                }
                //test si iles possible d'avoir une ligne verticale
                if( i+limTab<d){
                    //tester si ligne verticale
                    if(lignVerIsValide(tab,i,j,nombCroix))
                        point++;
                }
            }
            j++;
            if(j==dj){
                j=0;
                i++;
            }
        }
        let print='Score: '+point+'';
        document.getElementById('score').innerHTML = print;
        return point;
    }

    function diagRithIsValide(tab,i,j,nombCroix){
        for(let x=1; x<nombCroix; x++){
            document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+(j+x)+'t:'+tab[i+x][j+x]+']<br>';
            if(tab[i+x][j+x]!=1) {
                document.getElementById('result').innerHTML += 'diagonale droite:false<br>';
                return false;
            }
        }
        document.getElementById('result').innerHTML += 'diagonale droite:true<br>';
        return true;
        //return(tab[i+1][j+1]==1 && tab[i+2][j+2]==1);
    }
    function diagLeftIsValide(tab,i,j,nombCroix){
        for(let x=1; x<nombCroix; x++){
            document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+(j-x)+'t:'+tab[i+x][j-x]+']<br>';
            if(tab[i+x][j-x]!=1){
                document.getElementById('result').innerHTML += 'diagonale gauche:false<br>';
                return false;
            }
        }
        document.getElementById('result').innerHTML += 'diagonale gauche:true<br>';
        return true;
        //return(tab[i+1][j-1]==1 && tab[i+2][j-2]==1);
    }
    function lignHorIsValide(tab,i,j,nombCroix){
        for(let x=1; x<nombCroix; x++){
            document.getElementById('result').innerHTML +='[i:'+i+'j:'+(j+x)+'t:'+tab[i][j+x]+']<br>';
            if(tab[i][j+x]!=1) {
                document.getElementById('result').innerHTML += 'ligne hor:false:tab: '+tab[i][j+x]+' x:'+x+' i:'+i+' j:'+j+'<br>';
                return false;
            }
        }
        document.getElementById('result').innerHTML += 'ligne hor:true<br>';
        return true;
        //	return(tab[i][j+1]==1 && tab[i][j+2]==1);
    }
    function lignVerIsValide(tab,i,j,nombCroix){
        for(let x=1; x<nombCroix; x++){
            document.getElementById('result').innerHTML +='[i:'+(i+x)+'j:'+j+'t:'+tab[i+x][j]+']<br>';
            if(tab[i+x][j]!=1){
                document.getElementById('result').innerHTML += 'ligne ver:false<br>';
                return false;
            }

        }
        document.getElementById('result').innerHTML += 'ligne ver:true<br>';
        return true;
        //return(tab[i+1][j]==1 && tab[i+2][j]==1);

    }
