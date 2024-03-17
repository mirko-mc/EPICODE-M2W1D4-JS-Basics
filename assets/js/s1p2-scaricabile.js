/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`ESERCIZIO 1\n
In JavaScript ci sono diversi datatype che servono ad indicare il nostro contenitore cosa contiene. Abbiamo ad esempio:
- string che viene usato per indicare che nel contenitore c'è del testo;
- number che viene usato per indicare che nel contenitore ci sono dei numeri;
- boolean che viene usato per indicare il contenitore mi serve a stabilire se uma condizione è vera o falsa;
- bigint che viene usato per indicare che nel contenitore ci sono dei numeri grandissimissimi che non rientrano nel range del tipo number;
- null che viene usato per indicare che il contenitore è vuoto per il momento;
- undefined che viene usato per indicare che il contenitore è vuoto perchè non è stato specificato cosa contiene.
`);
document.write(`ESERCIZIO 1<br>`);
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`ESERCIZIO 2\n
Un oggetto è un'entità che raccoglie dentro di sé diverse variabili sotto forma di coppia chiave-valore.
`);
document.write(`<br>ESERCIZIO 2<br>`);
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log(`ESERCIZIO 3\nLa somma tra ${num1} e ${num2} è uguale a ${somma}`);
document.write(`<br>ESERCIZIO 3<br>La somma tra ${num1} e ${num2} è uguale a ${somma}<br>`);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(`ESERCIZIO 4\nLa variabile x vale ${x}`);
document.write(`<br>ESERCIZIO 4<br>La variabile x vale ${x}<br>`);
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name0 = `Mirko Campetiello`;
console.log(`ESERCIZIO 5\nIl mio nome è ${name0}`);
document.write(`<br>ESERCIZIO 5<br>Il mio nome è ${name0}<br>`);
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 4;
let differenza = 4 - x;
console.log(`ESERCIZIO 6\nLa differenza tra ${num3} e ${x} è uguale a ${differenza}`);
document.write(`<br>ESERCIZIO 6<br>La differenza tra ${num3} e ${x} è uguale a ${differenza}<br>`);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = `john`;
let name2 = 'John';

console.log(`ESERCIZIO 7\nIl testo ${name1} è uguale a ${name2}?`);
console.log(name1 === name2)
document.write(`<br>ESERCIZIO 7<br>Il testo ${name1} è uguale a ${name2}?<br>`);
document.write(name1 === name2);

console.log(`\nE se il testo lo trasformassi in minuscolo?`);
console.log(name1.toLowerCase === name2.toLowerCase);
document.write(`<br>E se il testo lo trasformassi in minuscolo?<br>`);
document.write(name1.toLowerCase === name2.toLowerCase);