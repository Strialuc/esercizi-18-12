/*Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). 
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. 
Infine stampa separatamente i 3 array.*/


// Array di automobili 

const automobili = [
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
  { marca: "Dacia", modello: "Duster", alimentazione: "gpl" },
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Opel", modello: "Corsa", alimentazione: "metano" },
  { marca: "BMW", modello: "Serie 1", alimentazione: "diesel" },
  { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
  { marca: "Hyundai", modello: "Kona", alimentazione: "elettrico" }
];

console.log(automobili);


// utilizzo filter per sottodividere gli array

const benzina = automobili.filter(auto => auto.alimentazione === "benzina");

const diesel = automobili.filter(auto => auto.alimentazione === "diesel");

const resto = automobili.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");

// Stampa dei tre array
console.log("Auto a benzina:", benzina);
console.log("Auto a diesel:", diesel);
console.log("Resto delle auto:", resto);