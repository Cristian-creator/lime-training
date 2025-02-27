// --- For Loop ---

// repetitia 1: i = 0, i < 5 (true), i++
// repetitia 2: i = 1, i < 5 (true), i++
// repetitia 3: i = 2, i < 5 (true), i++
// repetitia 4: i = 3, i < 5 (true), i++
// repetitia 5: i = 4, i < 5 (true), i++
// repetitia 6: i = 5, i < 5 (false)

// console.log("start...");

// for (let i = 0; i < 10; i++) {
//   console.log("Loop");
// }

// console.log("finish...");

// 3 zone
// 1. initializare - este executata o singura data atunci cand for-ul incepe si mereu o sa vedem o initializare de variabila.
// 2. conditie - este executata inainte de fiecare repetitie / iteratie. daca conditia este adevarata => codul din for se executa
// 3. increment/decrement - este executata dupa fiecare repetitie / iteratie.

// Exercitii:
// 1. Folosind un for loop sa se afiseze in consola "Loop 0", "Loop 1", ... "Loop 6" (timp 19:16)
// for (let i = 0; i < 7; i++) {
//   console.log(`Loop ${i}`);
// }

// 2. Folosind un for loop sa se afiseze in consola toate numerele de la 3 la 8
// for (let i = 3; i < 9; i++) {
//   console.log(i);
// }

// 3. Folosind un for loop sa se afiseze numerele pare de la 0 la 10 ( 19:27 )
// --- varianta 1 ---
// for (let i = 0; i < 11; i += 2) {
//   console.log(i);
// }

// --- varianta 2 ---
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

// 6 / 3 = 2 rest 0
// 7 / 3 = 2 rest 1
// 8 / 3 = 2 rest 2

// 5/2 = 2.5
// 5/2 = 2 rest 1 (2 * 2 + 1) | 5 % 2 = 1

// 10/6 = 1 rest 4 | 10 % 6 = 4
// 7/2 = 3 rest 1 | 7 % 2 = 1

// 4. Folosind un for loop sa se afiseze toate numerele de la 0 la 20 care sunt multiplii de 2 si de 3
// 6, 12, 18
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// 5. Folosind un for loop sa se calculeze suma numerelor de la 1 la 10
// let sum = 0;

// r1: i = 1, i < 11 (true), sum = 1, i++
// r2: i = 2, i < 11 (true), sum = 3, i++
// r3: i = 3, i < 11 (true), sum = 6, i++
// r4: i = 4, i < 11 (true), sum = 10, i++
// for (let i = 1; i < 11; i++) {
//   sum += i;
// }

// 6. Folosind un for loop sa se calculeze suma numerelor pare de la 1 la 10 (19:59)
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// 7. Folosind un for loop sa se calculeze produsul numerelor de la 1 la 10
// let prod = 1;

// 1 * 1 * 2 * 3 * 4 * 5 .. * 10
// for (let i = 1; i <= 10; i++) {
//   prod *= i;
// }

// 8. Folosind un for loop sa se determine cati multiplii de 3 exista in intervalul 1-20
// 3, 6, 9, 12, 15, 18 => 6
// let counter = 0;

// for (let i = 1; i < 21; i++) {
//   if (i % 3 === 0) {
//     counter++;
//   }
// }

// 9. Folosind un for loop sa se determine de cate ori apare litera "c" intr-un string
// let myName = "CcristiadasdadasdaCCnC";
//            012345678
// myName.length = 9
// let counter = 0;

// varianta 2
// for (let i = 0; i < myName.length; i++) {
//   if (myName[i].toUpperCase() === "C") {
//     counter++;
//   }
// }

// --- varianta 1 ---
// for (let i = 0; i < myName.length; i++) {
//   if (myName[i] === "c" || myName[i] === "C") {
//     counter++;
//   }
// }

// 10. Folosind un for loop sa se determine cate vocale contine un string 20:55
// let str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minus.";
// let counter = 0;

// for (let i = 0; i < str.length; i++) {
//   let letter = str[i].toUpperCase();

//   if (letter === "A" || letter === "E" || letter === "I") {
//     counter++;
//   }
// }

// 11. Folosind un for loop sa se calculeze suma elementelor dintr-un array
// let numbers = [5, 31, 304, 12, 0];
// let sum = 0;

// r1: i = 0, sum = 5, i++
// r2: i = 1, sum = 36, i++
// r3: i = 2, sum = 340, i++
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// 12. Folosind un for loop sa se determine de cate ori apare cifra zero intr-un array
let numbers = [5, 31, 0, 0, 304, 12, 0];
let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    counter++;
  }
}
