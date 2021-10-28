// JSnack 2
//     L’utente inserisce due parole in successione, con due prompt.
//     Il software stampa prima la parola più corta, poi la parola più lunga.

// Ref

const firstUserWord = prompt ('Inserisci una parola');
const secondUserWord = prompt ('Inserisci una seconda parola');



if (firstUserWord.length > secondUserWord.length) {
    console.log('La prima parola è più lunga della seconda!');
    alert('La prima parola è più lunga della seconda!')

} else if (firstUserWord.length === secondUserWord.length) {
    console.log('Le parole hanno lunghezze uguali!')
    alert('Le parole hanno lunghezze uguali!');
}
else {
        console.log('La seconda parola è più lunga della prima!');
        alert('La seconda parola è più lunga della prima!');
    } 