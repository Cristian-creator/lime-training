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

const getCartTotal = (products) => {
  if (products.length === 0) {
    return "Cart is empty";
  }

  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[0].price * products[i].quantity;
  }

  return sum;
};

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
