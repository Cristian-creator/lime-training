// --- Variabile ---
// Pasi pentru creare variabila:
// 1) scrii "let" pe o linie goala si la final adaugi un spatiu
// 2) ii pui un nume
// 3) pui semnul egal
// 4) pui o valoare
// 5) pui punct si virgula

let x = 5;

// Timp 19:57
// Exercitii:
// 1) sa se creeze o variabila cu numele y si sa aiba valoarea 8
// 2) sa se creeze o variabila cu numele temperature si sa aiba valoarea -7
// 3) sa se creeze o variabila cu numele distance si sa aiba valoarea 120

let temperature = -7;
let distance = 120;
let y = 8;

// Restrictii nume variabila:
// - fara spatii in nume
// - nu poate incepe cu cifre
// - cu foarte mici exceptii, nu poti include alte caractere in afara de litere si cifre

// Conventie: intotdeauna folosim notatia camel case
// "distance between bucharest and cluj" -> "distanceBetweenBucharestAndCluj"
let distanceBetweenBucharestAndCluj = 300;

// Timp 20:06
// Exercitiu: sa se creeze o variabila care sa contina valoarea 1000 si care reprezinta id-ul userului curent

// --- Tipuri de date in Javascript ---
// number
let todayTemperature = -5.2;
// string ( aka texte )
let myName = "Cristian";
// boolean ( true / false )
let currentUserIsAdmin = true;
let isSoldOut = false;

// Timp 20:18
// Exercitii:
// 1) sa se creeze o variabila care contine numele utilizatorului curent
// 2) sa se creeze o variabila care contina varsta utilizatorului curent
// 3) sa se creeze o variabila care contine o valoare booleana care indica daca abonamentul userului e platit sau nu
let currentUserID = "MyName";
let userAge = 38;
let userSubscription = true;

// --- Operatori aritmetici ---
// +, -, *, /
let productPricePerUnit = 120;
let totalProductPricePerUnit =
  productPricePerUnit + (19 / 100) * productPricePerUnit;

console.log(totalProductPricePerUnit);

// Timp 20:41
// Exercitiu: sa se creeze o variabila a cu valoarea 7, o variabila b cu valoarea 20 si o variabila c care contine
// valoarea calculului: a la puterea a 2-a minus b impartit la 5
let a = 7;
let b = 20;
let c = a ** 2 - b / 5;

// --- Operatori de comparare ---
// <, <=, ===, !==, >=, >
let isOverage = userAge >= 18; // true / false

// if (isOverage === true) {
//   alert("Welcome!");
// } else {
//   alert("Forbidden access");
// }

// if (userAge >= 18) {
//   alert("Welcome!");
// } else {
//   alert("Forbidden access");
// }

// Timp 21:38
// let myName = "Cristian";
// Exercitiu: sa se verifice daca lungimea variabilei myName este mai mare decat 15. Daca comparatia este true,
// sa se afiseze un alert cu mesajul "Too long", in caz contrar "Ok"

console.log(myName.length);

if (myName.length === 15) {
  alert("ok");
} else {
  alert("long");
}
