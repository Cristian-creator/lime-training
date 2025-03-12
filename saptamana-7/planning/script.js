// --- Functii ---
const handleUserAccess = () => {
  let age = prompt("How old are you?");
  age = Number(age);

  if (age < 18) {
    alert("Access forbidden!");
  } else {
    alert("Welcome!");
  }
};

// handleUserAccess();

// Q: Ce cod executa o functie?
// A: ce vrei tu

// Q: Cand se executa codul dintr-o functie?
// A: cand apelezi functia

// Q: Cand ai nevoie de o functie?
// A: Depinde - cazuri comune sunt:
// 1) cand vrei ca un button pe click sa faca ceva
// 2) cand vrei sa reutilizezi niste linii de cod fara sa le rescrii

// let calculateTotalPrice = (price) => {
//   let totalPrice = price + price * 0.19;
//   return totalPrice;
// };

// console.log(calculateTotalPrice(100));

// !Important - valoarea apelului unei functii este dat de return

// Despre return:
// 1) il punem intr-o functie doar atunci cand vrem ca functia sa ne dea ceva inapoi
// 2) dupa return putem avea orice valoare, orice tip de data ( string, number, boolean, array, obiect etc. )
// 3) by default, o functie returneaza undefined

// 1. declarare
// 2. initializare
// let x = 10;

// let x; // o variabila by default, daca nu e initializata, are valoarea undefined

// console.log(x);

// Exercitiu 1) sa se adauge un parametru la functia calculateTotalPrice, iar numele parametrului sa fie hasPaidSubscription.
// daca valoarea parametrului este egala cu false, atunci sa se adauge un 10% extra peste pretul intial.

//                                parametrii
const calculateTotalPrice = (price, hasPaidSubscription) => {
  if (price < 0) {
    return "Price must be a positive number";
  }

  let totalPrice = price;

  if (hasPaidSubscription === false) {
    totalPrice = totalPrice + price * 0.1;
  }

  totalPrice = totalPrice + 0.19 * totalPrice;

  return totalPrice;
};

//                               argumente
// console.log(calculateTotalPrice(100, false));

// Exercitiul 2) sa se creeze o functie care primeste ca parametru o parola.
// functia trebuie sa returneze
// 1) "This field is required" daca parola nu a fost introdusa
// 2) "Weak password" daca parola indeplineste un criteriu sau niciunul
// 3) "Medium password" daca parola indeplineste doua criterii
// 4) "Strong password" daca parola indeplineste trei criterii
// 5) "Very strong password" daca parola indeplineste toate criteriile

// Timp 19:54
// Criterii:
// 1) minim 8 caractere
// 2) minim o cifra
// 3) minim o majuscula
// 4) minim un caracter special !, @, #, $, %, ^, &, *, (, )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// pisicutza10
// passwowrd[7] => "1" (string) => 1 (number)
const validatePassword = (password) => {
  if (password.length === 0) {
    return "This field is required";
  }

  let criterias = 0;

  if (password.length >= 8) {
    criterias++;
  }

  for (let i = 0; i < password.length; i++) {
    let convertedToNumber = parseInt(password[i]);
    if (numbers.includes(convertedToNumber)) {
      criterias++;
      break;
    }
  }

  if (password !== password.toLowerCase()) {
    criterias++;
  }

  if (
    password.includes("!") ||
    password.includes("@") ||
    password.includes("#")
  ) {
    criterias++;
  }

  if (criterias === 0 || criterias === 1) {
    return "Weak password";
  }

  if (criterias === 2) {
    return "Medium password";
  }

  if (criterias === 3) {
    return "Strong password";
  }

  if (criterias === 4) {
    return "Very strong password";
  }
};

// Exercitiul 3) sa se creeze o functie care primeste ca parametru un array de produse.
// functia sa returneze suma produselor / totalul cartului

const cartItems = [
  {
    price: 100,
    quantity: 1,
  },
  {
    price: 69,
    quantity: 3,
  },
  {
    price: 200,
    quantity: 2,
  },
];

// Ierarhie
// global scope -> function scope -> block scope ( creat de for )

// Accesibilitate
// global scope <- function scope <- block scope ( creat de for )

const getCartTotal = (products) => {
  if (products.length === 0) {
    return "Cart is empty";
  }

  // function scope
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    // block scope
    const totalPrice = products[0].price * products[i].quantity;
    sum += totalPrice;
  }

  // function scope
  console.log(totalPrice);

  return sum;
};

// sum is not defined
console.log(sum);

console.log(getCartTotal(cartItems));

// --- Object Wrapper ---
// Avem pentru String, Number si Boolean

const person = {
  // proprietate
  name: "John",
  // proprietate
  age: 30,
  // metoda (method)
  generateWelcomeMessage: function () {
    console.log(`Welcome ${this.name}`);
  },
};

// console.log(person.name);
person.generateWelcomeMessage();

const price = 51.3467;

price += 10;

console.log(price.toFixed(2));

// --- Tema ---
// Exercitiul 1) sa se creeze o functie care primeste ca parametru score-ul unui student la un test (interval 0 - 100).
// functia trebuie sa returneze grade-ul in sistem amerikanesk, adica:
// "F" daca score < 50.
// "D" daca 50 <= score < 65.
// "C" daca 65 <= score < 80.
// "B" daca 80 <= score < 90.
// "A" daca score >= 90.

// Exercitiul 2) sa se creeze o functie care primeste ca parametru un username.
// functia trebuie sa returneze
// 1) "This field is required" daca username-ul nu a fost introdus
// 2) "Invalid username" daca username-ul are sub 5 caractere SAU daca include spatiu SAU caractere speciale
// 3) "Valid username" daca se trece de validarile de mai sus

// Exercitiul 3) sa se creeze o functie care primeste ca parametru un email.
// functia trebuie sa returneze
// 1) "This field is required" daca emailul nu a fost introdus
// 2) "Invalid username" daca emailul nu e valid. un mail valid:
// - are peste 6 caractere
// - contine @ si .
// - nu contine mai multi de a rond sau mai multe puncte
// - nu contine caractere speciale in afara de _ sau -
// - nu contine _ sau - inainte sau dupa @
// - nu contine _ sau - inainte sau dupa .
// - @ trebuie sa fie inainte de .
// - @ trebuie sa nu se afle pe prima pozitie in string
// - . trebuie sa nu se afle pe ultima pozitie in string
// - intre @ si . trebuie sa existe cel putin un caracter
// - dupa . trebuie sa aiba minim 2 caractere
// 3) "Valid email" daca se trece de validarile de mai sus

// Exercitiul 4) sa se creeze o functie care primeste ca parametru un cod de discount (string).
// un cod de discount este considerat valid daca:
// - are 8 caractere
// - contine minim 2 numere
// - contine minim o litera cu uppercase
// Daca un cod este invalid sa se returneze "Invalid code", altfel "Valid code".

// Exercitiul 5) sa se creeze o functie care are un parametru reprezentand soldul unui cont bancar ( number ) al unei persoane,
// iar al doilea parametru reprezentand suma de bani pe care vrea sa o scoata din bancomat ( number ).
// functia sa returneze:
// - "Invalid amount" daca suma de bani nu e numar pozitiv intreg
// - "Please choose a multiple of ten" daca suma de bani nu e multiplu de 10
// - "Insufficient funds" daca suma de bani e mai mare decat soldul
// - "Success! You've withdrawed $X. Your new balance is $Y" daca e totul bn

// Exercitiul 6) sa se creeze o functie care are 3 parametrii a, b si c. fiecare reprezinta lungimea laturii unui triunghi.
// daca exista vreo latura care sa aiba o lungime invalida ( numar non-pozitiv ) => sa se returneze "Invalid triangle"
// daca triunghiul este dreptunghic => "Right Triangle" ( hint: pitagora )
// daca cele 3 laturi sunt egale => "Equilateral"
// daca cele 2 laturi sunt egale => "Isosceles"
// daca cele nu exista laturi egale => "scalene"

// Exercitiul 7) Sa se creeze o functie care are scopul de a returna statusul unui birou - daca e deschis sau nu
// intr-o zi specifica, la o ora anume. Biroul este deschis in intervalul M-F, orele 9-18.

// Functia are 2 parametrii: day si hour.
// Day poate fi un string din lista urmatoare: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
// Hour poate fi un numar din intervalul 0-23.

// Daca day nu e o valoare valida ( adica un string din list aia) => sa se returneze "Invalid day".
// Daca hour nu e o valoare valida => sa se returneze "Invalid hour".

// Daca biroul este deschis => sa se returneze "Office is open"
// Daca biroul este inchis => sa se returneze "Office is closed."

// Extra challenge: daca e inchis biroul, sa se returneze un string de genul: "Office is closed. It will open tomorrow at 9AM".
// Practic afisam cea mai apropiata zi + ora, asa cum apare gen in google cand dai search dupa un restaurant.
// Aici fiti atenti ca daca day este vineri, iar biroul se deschide luni => acel tomorrow nu e corect, trebuie pus altceva.
// Sunt cateva cazuri de tratat, nu le mentionez. Ganditi-o voi foarte atent.

// Timp 19:54
// Criterii:
// 1) minim 8 caractere
// 2) minim o cifra
// 3) minim o majuscula
// 4) minim un caracter special !, @, #, $, %, ^, &, *, (, )
