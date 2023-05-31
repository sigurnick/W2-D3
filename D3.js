const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

let characters = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
console.log("--------Esercizio 2--------");

for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}
console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno
  tutti gli oggetto femminili, CON QUESTA STRUTTURA: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
console.log("--------Esercizio 3--------");

let femaleCharacters = [];
let obj = {};

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    obj = {
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    };
    femaleCharacters.push(obj);
  }
}
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: [],
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
console.log("--------Esercizio 5--------");

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;

    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;

    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;

    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;

    case "blue-gray":
      eyeColor.blue_gray.push(starWarsCharacters[i]);
      break;
  }
}

console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
console.log("--------Esercizio 6--------");

let crewMass = 0;
let i = 0;

while (i < starWarsCharacters.length) {
  crewMass = crewMass + Number(starWarsCharacters[i].mass);
  i++;
}

console.log(crewMass);

/* ESERCIZIO 7
  Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
  (sei in difficoltà? cerca su un motore di ricerca switch case e conditionals)

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è uguale a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log("--------Esercizio 7--------");

switch (true) {
  case crewMass < 500:
    console.log("Ship is under loaded");
    break;

  case crewMass === 500:
    console.log("Ship is half loaded");
    break;

  case crewMass > 700 && crewMass <= 900:
    console.log("Warning: Load is over 700");
    break;

  case crewMass > 900 && crewMass <= 1000:
    console.log("Critical Load: Over 900");
    break;

  case crewMass > 1000:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
    break;
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
console.log("--------Esercizio 8--------");

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}

console.log(starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Usa uno più for loop per raggiungere il risultato

  (tip: cerca un metodo degli array per rimuovere un elemento)

  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
console.log("--------Esercizio 9--------");

console.log(characters);
console.log(femaleCharacters);

for (let i = 0; i < characters.length; i++) {
  for (let x = 0; x < femaleCharacters.length; x++) {
    if (characters[i] === femaleCharacters[x].name) {
      characters.splice(i, 1);
    }
  }
}

console.log(characters);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
console.log("--------Esercizio 10--------");

let min = 0; // valore minimo
let max = starWarsCharacters.length - 1; // valore massimo

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let index = randomNumber;



if (starWarsCharacters[index].gender === "male") {
  console.log(
    starWarsCharacters[index].name,
    "is a man. He was born in",
    starWarsCharacters[index].birth_year,
    "Is",
    starWarsCharacters[index].height,
    "cm tall and he waighs",
    starWarsCharacters[index].mass,
    "kg. He has",
    starWarsCharacters[index].skin_color,
    "skin color,",
    starWarsCharacters[index].hair_color,
    "hair, and",
    starWarsCharacters[index].eye_color,
    "eyes"
  );
} else if (starWarsCharacters[index].gender === "female") {
  console.log(
    starWarsCharacters[index].name,
    "is a woman. She was born in",
    starWarsCharacters[index].birth_year,
    "Is",
    starWarsCharacters[index].height,
    "cm tall and she weighs",
    starWarsCharacters[index].mass,
    "kg. She has",
    starWarsCharacters[index].skin_color,
    "skin color,",
    starWarsCharacters[index].hair_color,
    "hair, and",
    starWarsCharacters[index].eye_color,
    "eyes"
  );
} else {
  console.log(
    starWarsCharacters[index].name,
    "is a robot. It was created in",
    starWarsCharacters[index].birth_year,
    "Is",
    starWarsCharacters[index].height,
    "cm tall and it weighs",
    starWarsCharacters[index].mass,
    "kg. It has",
    starWarsCharacters[index].skin_color,
    "skin color and",
    starWarsCharacters[index].eye_color,
    "eyes"
  );
}
