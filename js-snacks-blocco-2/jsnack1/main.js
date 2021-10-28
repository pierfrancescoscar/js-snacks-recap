// JSnack 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// Ref

let userNumber = parseInt(prompt('Insert a number'));

// Insert a number, if that number is "even" print it, then if is "odd" print his next number

if (userNumber % 2 == 0) {
    console.log(`Your selected number ${userNumber} is even!`);
} else {
    userNumber += + 1;
    console.log(`Your selected number was odd, so we have added his next number, so now is ${userNumber}`);
}




