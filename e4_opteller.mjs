// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


// Voeg hier je eigen code in

let getal1 = "5";
let getal2 = 11; 

let som = getal1 + getal2;
console.log(som);

let maal = getal1 * getal2; 
console.log(maal);

let delen = getal1 / getal2;
console.log(delen);

let verschil = getal1 - getal2;
console.log(verschil);




process.exit();