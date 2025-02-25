// --- Exercitii ---
// 1. Sa se creeze o variabila care contine cantitatea unui produs. Daca cantitatea este egala cu zero, sa se afiseze
// in consola "Selecteaza minim un produs". Daca cantitatea este mai mare decat zero, sa se afiseze "Comanda poate fi plasata".

// 2. Sa se mai adauge o variabila care contine pretul produsului per unitate. Daca cantitatea este mai mare decat zero sa se
// afiseze "Comanda poate fi plasata. Totalul este de X lei."

// 3. Daca cantitatea este mai mare decat zero, sa se afiseze "Comanda poate fi plasata. Ai comandat X unitati, iar totalul este de
// Y lei".

// 4. Sa se creeze o variabila care contine numele produsului.
// "Selecteaza minim o unitate din produsul X".
// "Comanda poate fi plasata. Ai comandat X unitati din produsul Y, iar totalul este de Z lei.`

let quantity = 5;
let price = 100;
let totalPrice = quantity * price;
let name = "Laptop";

if (quantity === 0) {
  console.log(`Selecteaza minim o unitate din produsul ${name}`);
} else {
  console.log(
    `Comanda poate fi plasata. Ai comandat ${quantity} unitati din produsul ${name}, iar totalul este de ${totalPrice} lei.`
  );
}

// let x = 10;
// x += 7;
// x = x + 7;

// console.log(x); // 17

// 1) Sa se creeze o variabila reprezentand parola unui user. Daca parola are zero caractere ( empty string - "" ), atunci sa se
// afiseze in consola "This field is required".

// 2) Daca parola are intre 0 si 8 caractere, sa se afiseze in consola "The password must contain at least 8 characters".

// 3) Daca parola nu contine niciun numar, sa se afiseze in consola "The password must contain at least 8 characters
// and one number".

let password = "aaaaaaaaaa";

if (password.length === 0) {
  console.log("This field is required");
} else if (
  password.length < 8 &&
  (password.includes(0) === true ||
    password.includes(1) === true ||
    password.includes(2) === true)
) {
  console.log("The password must contain at least 8 characters and one number");
} else {
  console.log("Good to go");
}

console.log("test");

// --- Logical Operators ---

// AND ( && ) - amandoua valoarile trebuie sa fie true ca sa returneze true
let hasLoyaltyCard = true;
let isMonday = false;

console.log(hasLoyaltyCard && isMonday); // false

// OR ( || ) - una dintre valori trebuie sa fie true ca sa returneze true
let isStudent = false;
let hasCoupon = true;

console.log(isStudent || hasCoupon); // true

// NOT ( ! ) - valoarea opusa unei valori boolene
let isVIP = false;

console.log(!isVIP); // true

// --- Exercitii ---
// 1) Sa se creeze o variabila care reprezinta varsta introdusa de user intr-un formular. Daca numarul este in afara intervalului
// 0 - 99, sa se afiseze in consola "Invalid age"
let userAge = 50;

// --- varianta 1
// if (userAge < 0 || userAge > 99) {
//   console.log("Invalid age");
// }

// --- varianta 2
if (!(userAge >= 0 && userAge <= 99)) {
  console.log("Invalid age");
}

// 2) sa se creeze 2 variabile, daca userul este admin sau daca are cont premium sa se afiseze in consola "Access granted",
// in caz contrar "Access denied"
let isAdmin = false;
let isPremiumAccount = true;

if (isAdmin === true || isPremiumAccount === true) {
  console.log("acces garanted");
} else {
  console.log("acces denied");
}

// --- Array-uri ---
// Q: ce este un array?
// A: este un tip de data din javascript

// Q: cum arata un array?
let listaDeIngrediente = ["pui", "bere", "whiskey", "vodka", "gin"];
//                          0      1         2        3         4

// Q: ce poate contine un array?
// A: orice tip de data din javascript ( number, string, boolean )

// Q: cate elemente poate contine un array?
// A: oricate

// Q: cum folosesti un element dintr-un array?
// A: scrii numele array-ului, pui imediat dupa paranteze patrate, iar intre ele scrii index-ul pe care sta elementul
console.log(listaDeIngrediente[0]);

// Q: cum adaugi un element intr-un array?
// A: scrii numele array-ului, folosesti metoda push, iar intre parantezele rotunde de dupa push,
// scrii elementul care vrei sa fie adaugat
listaDeIngrediente.push("vin", "abc");

console.log(listaDeIngrediente);

// Exercitiu:
// Sa se creeze un array cu 4 elemente, apoi:
// - sa se afiseze in consola primul element din array
// - sa se afiseze in consola al treilea element din array
// - sa se adauge in array un nou element
// - sa se afiseze in consola tot array-ul
