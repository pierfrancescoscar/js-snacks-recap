// Snack 4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const oddArray = [];


for (let i=0; i < 6; i++) {
    const userNumber = parseInt( prompt('Inserisci un numero') );
}

if (userNumber % 2 !== 0) {
    oddArray.push(userNumber);
}
