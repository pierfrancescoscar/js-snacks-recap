// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while

// Ref
let sum = 0;

// // "For" version
// for (let i=0; i < 5; i++) {
//     const newNumber = parseInt ( prompt ('Inserisci un numero') );
//     sum += newNumber;
// }

// "While" version

// Ref
let sum = 0;
let counter = 0;

while (count < 5) {
    const newNumber = parseInt (prompt('Enter a number'));
    sum += newNumber;
}

console.log(`Sum of the two entered numbers is ${sum}`);