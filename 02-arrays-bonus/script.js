const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (i=0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers.indexOf("Ed"));
//Ho voluto cercare in che posizione era Ed
console.log(teachers.length);
//Poi ho controllato quanti elementi avesse l'array supponendo di non saperlo
teachers.copyWithin(5, 6);
//Ho usato allore il sistema copyWithin per sostituire la posizione di Ed (5) con l'ultima posizione dell'array
teachers.pop();
//E quindi tramite pop mi sono liberato dell'ultimo elemento che ora era Ed
console.log(teachers);




