/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/
alert("hello;")
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area (l1 ,l2){
    return l1 * l2 ;
    }
    console.log(area(2,5));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  console.log(crazySum(3,3));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(number) {
    let diff = Math.abs(number - 19);
    if (number > 19) {
      return diff * 3;
    } else {
      return diff;
    }
  }
  console.log(crazyDiff(100));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  console.log(boundary(60));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str) {
    if (str.startsWith("EPICODE")) {
      return str;
    } else {
      return "EPICODE " + str;
    }
  }
  console.log(epify("Hello"));       
  console.log(epify("EPICODE Test")); 
    
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(positiveNum){
    if (positiveNum % 3 === 0 || positiveNum % 7 === 0) {
        return true;
    
    } else {
        return false;
    }
}
console.log(check3and7(18));
console.log(check3and7(21));
console.log(check3and7(20));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    return str.split("").reverse().join("");
  }
console.log(reverseString("tina"));  
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    let words = str.split(" ");
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let firstLetter = word.charAt(0).toUpperCase();
      let restOfWord = word.slice(1);
      let capitalizedWord = firstLetter + restOfWord;
      result.push(capitalizedWord);
    }
    
    return result.join(" ");
  }
  console.log(upperFirst("ciao ragazzi"));  
console.log(upperFirst("the quick brown fox jumps over the lazy dog"));  

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str) {
    return str.slice(1, -1);
  }
  console.log(cutString("tina")); 
console.log(cutString("epicode"));  

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let randomArray = [];
    for(let  i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        randomArray.push(randomNumber);
    }
    return randomArray;
}
console.log(giveMeRandom(5));