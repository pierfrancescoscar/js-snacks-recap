// JSnack 2
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati

// Refs

const nameList = ['Pierfrancesco', 'Pietro', 'Piero', 'Francesco'];
const surnameList = ['Scarinci', 'Scarnici', 'Scaringi', 'Scarci'];
let invitedPeopleList = '';
// console.log(nameList);
// console.log(surnameList);

// Generate a list of 3 people from name list and surname list

for (let i=0; i < 3; i++) {

    const randomName = nameList[Math.floor(Math.random()*nameList.length)];
    // console.log(randomName);

    const randomSurname = surnameList[Math.floor(Math.random()*surnameList.length)];
    // console.log(randomSurname);

    invitedPeopleList = (randomName + ' ' + randomSurname);
    // console.log(invitedPeopleList);

}

