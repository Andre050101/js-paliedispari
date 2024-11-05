/*Consegna:
1- Chiedere all’utente di inserire una parola
2- Creare una funzione per capire se la parola inserita è palindroma
*/

/*Richiesta parola a utente: */
let word = prompt("Inserire la parola per la quale verificare la palindromicità:")



/**
 * Controlla se una specifica parola è palindroma o meno
 * Una parola palindroma è una parola che viene letta nello stesso modo sia da sinistra verso destra che viceversa
 * 
 * @param {string} parola - Parola da controllare
 * @returns {boolean} - True se la parola è palindroma, false altrimenti
 */
function palindroma(parola){
    let parolareverse="";
    for(let i = parola.length - 1; i >= 0; i--){
        parolareverse += parola[i];
    }
    if(parola===parolareverse)
        return true;
    else
        return false;
}

console.log(palindroma(word));