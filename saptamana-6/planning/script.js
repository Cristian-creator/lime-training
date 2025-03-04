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

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// 1 % 2 =

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

// tema - 04.03.2025
// 1) Exercitiul asta este pentru o clinica care are nevoie sa faca o categorisire pe pacienti in functie de varsta. Task-uri:
// - creeaza o variabila care contine varsta pacientului
// - daca varsta este sub 12 => afiseaza in consola "copil"
// - daca varsta este intre 12 (inclusiv) si sub 18 => afiseaza in consola "adolescent"
// - daca varsta este intre 18 (inclusiv) si 65 => afiseaza in consola "adult"
// - daca varsta este peste 65 (inclusiv) => afiseaza in consola "senior"

// 2) Exercitiul asta este pentru determinarea procentului de reducere aplicat la o cafenea. Task-uri:
// - creeaza 3 variabile: una pentru costul total al bonului inainte de reducere, una care indica daca clientul este student sau nu ( val booleana ),
// una care indica daca este weekend ( booleana )
// - daca clientul este student si totodata este weekend => aplica o reducere de 20% pe costul total si afiseaza in consola "Pretul final dupa aplicarea reducerii este de X lei"
// - daca clientul este student sau daca este weekend => aplica o reducere de 10% pe costul total si afiseaza in consola "Pretul final dupa aplicarea reducerii este de X lei"
// - daca nu a fost aplicata nicio reducere => afiseaza in consola "Pret: X lei"

// 3) Exercitiul asta este pentru afisarea eligibilitatii (LGBT) unui student la bursa. Task-uri:
// - creeaza 4 variabile: una care contine media notelor studentului, una care contine nr de absente,
// una care contine nota minima ca sa iei bursa, una care contine numarul de absente MAXIM admis ca sa iei bursa
// - daca studentul are media necesara si se incadreaza in nr maxim admis de absente, sa se afiseze in consola "felicitari, esti eligibil pentru bursa"
// - daca studentul nu se incadreaza cu media, dar cu absentele sta bine, atunci sa se afiseze un mesaj in consola gen "ai numarul de absente admis, dar nu te incadrezi cu media ca sa primesti bursa"
// - la fel ca mai sus, sa se trateze cazul invers ( medie buna, absente nu )
// - daca studentul nu indeplineste nicio conditie, sa se afiseze in consola un mesaj sugestiv
// ( tip: folositi else if )

// 4) (vezi cerinta aici - minutul 0:00 )

// 5) (vezi cerinta aici - minutul 5:00 )

// 6) (vezi cerinta aici - minutul 5:00 )

// 7) Sa se creeze o variabila care contine un array cu numere - reprezentand varstele unui grup, iar o alta variabila
// cu numele "children" si valoarea 0. Folosind un for loop, sa se treaca prin fiecare element din array si sa se numere
// cati copii sunt ( practic cate varste sunt mai mici decat 12 ). La final, sa se afiseze in consola "No. of children: X".
//  P.S. - daca nu e clar, numaratoarea se face in variabila children

// 8) Tot in codul solutiei de mai sus, includeti extra o numaratoare si pentru adolescenti - interval 12 (inclusiv) - 18.
// La final, sub console.log-ul de la children, sa se afiseze "No. of teenagers: Y".
// O numaratoare pentru adulti - interval 18 (inclusiv) - 65. La final sa se afiseze in consola "No. of adults: Z"
// O numaratoare pentru seniori - peste 65 (inclusiv). La final sa se afiseze in consola "No. of seniors: "

// 9) Tot in codul solutiei de mai sus, includeti calcularea sumei totale a varstelor. Ex: daca ai array-ul [5, 20, 8] => se va afisa "Sum of ages: 33".

// 10) Tot in codul solutiei de mai sus, includeti un console.log la final care sa afiseze media varstelor. Ex: daca ai array-ul [5, 20, 8] => se va afisa "Average: 11".

// IMPORTANT:
// - folositi nume de variabile sugestive, pe notatia camelCase, iar cuvintele folosite sa fie in engleza
// - codul sa fie formatat ca la curs
