/*Consegna:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

let pariDispari = prompt("Scegli: pari o dispari:"); //Richiesta pari o dispari
pariDispari = pariDispari.toLowerCase(); //Conversione in minuscolo per controllo validazione
while (pariDispari !=="pari" && pariDispari !=="dispari"){ //Validazione/Controllo inserimento
    pariDispari = prompt("Errore! Scelta invalida! Scegli: pari o dispari:");
}

let nUser = parseInt(prompt("Scegli un numero da 1 a 5:")); //Richiesta numero da 1 a 5
while(isNaN(nUser) || nUser < 1 || nUser > 5){ //Validazione/Controlo numero inserito
    nUser = parseInt(prompt("Numero non valido. Scegli un numero da 1 a 5:"));
} 

/**
 * Genera numero random intero in range (min, max)
 * 
 * @param {number} min //Numero minimo range
 * @param {number} max //Numero massimo range
 * @returns {number} //Numero restituito compreso nel range
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nPC = randomNumber(1, 5); //Numero random PC
let somma = nUser + nPC; //Somma numero utente e numero pc

/**
 * Controlla se il numero dato come argomento è pari o dispari e ne restituisce la riposta
 * 
 * @param {number} number //Numero per la quale verificare se è pari o dispari
 * @returns {string} //"pari" se number è pari, dispari altrimenti 
 */
function sumEvenOdd(number){
    if(number % 2 === 0)
        return "pari";
    else
        return "dispari";
}

if(sumEvenOdd(somma)===pariDispari)
    console.log("Hai vinto!");
else
    console.log("Hai perso!");
