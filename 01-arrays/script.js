const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]
for (let i = 0; i <= teachers.length - 1; i++) {
    let insegnante = teachers[i];
    let posizione = teachers.indexOf(teachers[i]);
    console.log(insegnante + " è l'insegnante in posizione " + posizione); 
}

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[4];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[5] = "Patrick";
console.log(teachers);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers[teachers.length -1];
console.log(lastTeacher);//Dimostrazione di averlo salvato correttamente
teachers.pop(); //Lo elimino dalla lista ultima posizione
console.log(lastTeacher); //Comunque salvato
console.log(teachers[teachers.length -1]); //Nuovo ultimo posto

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
console.log(firstTeacher);//Dimostrazione di averlo salvato correttamente
teachers.shift(); //Lo elimino dalla lista prima posizione
console.log(firstTeacher); //Comunque salvato
console.log(teachers[0]); //Nuovo primo posto


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log(teachers);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sarah");
console.log(teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log(lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(" ,");
console.log(teachersString);


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

const isTeachersEmpty = (teachers.length === 0);
console.log(isTeachersEmpty);

