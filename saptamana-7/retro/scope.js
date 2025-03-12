// --- Javascript Scope ---
// Definitie: scope-ul reprezinta contextul curent de executie in care valorile si expresiile sunt vizibile si in care pot fi folosite.
// Daca o variabila sau o expresie nu este in scopul curent, atunci nu poate fi folosita.

// Tipuri de scope:
// 1) Global scope
// 2) Module scope
// 3) Function scope ( scope creat de functii )
// 4) Block scope ( scope create de block-uri: if, else, for etc. )

// Foarte important!
// Scope-urile pot fi organizate intr-o ierarhie. Un scope copil poate accesa un scope parinte, dar nu invers.

// Exemplu block scope:
const price = 100;

if (price > 0) {
  const totalPrice = price + price * 0.19;
  console.log(`Total price is ${totalPrice}`);
}

console.log(totalPrice);
