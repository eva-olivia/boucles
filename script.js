"use strict";
/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */

let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}
//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let aT=3;
while(aT<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");
