// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

// Ref
const button = document.querySelector('.btn');
let userNumber = '';

// When clicked, the button will ask a number to the user

button.addEventListener('click', function() {
   userNumber = prompt ('Inserisci un numero a 4 cifre');
   let sum = 0;
   let media = 0;

// Validation

while (userNumber.length != 4 || isNaN(numero)) {
    alert('Per piacere, inserisci un numero a 4 cifre');
    userNumber = prompt('Inserisci un numero a 4 cifre');
}

// Cycle

for (let i=0; i < userNumber.length; i++) {
    sum += parseInt(userNumber[i]);
}

// Media

media = sum / userNumber.length;

console.log(sum, media);

})







