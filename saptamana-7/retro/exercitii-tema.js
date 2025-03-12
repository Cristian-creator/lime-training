const validateEmail = (email) => {
  // are peste 6 caractere
  if (email.length <= 6) {
    return "Invalid email";
  }

  //   contine @ si .
  if (email.includes("@") === false || email.includes(".") === false) {
    return "Invalid email";
  }

  //   nu contine mai multi de a rond sau mai multe puncte
  let numberOfAronds = 0;
  let numberOfDots = 0;
  //   'a@@a.a'
  // i = 0; 'a' === '@'
  // i = 1; '@' === '@'
  // i = 2; '@' === '@'
  // i = 3; 'a' === '@'
  // i = 4; '.' === '@'
  // i = 5; 'a' === '@'
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      numberOfAronds++;
    }
    if (email[i] === ".") {
      numberOfDots++;
    }
  }
  if (numberOfAronds > 1 || numberOfDots > 1) {
    return "Invalid email";
  }

  // nu contine caractere speciale in afara de _ sau -
  const specialCharacters = ["!", "#", "$", "%"];

  // 'a#dddd'
  //  i = 0; 'a'
  //  i = 1; '#'
  for (let i = 0; i < email.length; i++) {
    if (specialCharacters.includes(email[i]) === true) {
      return "Invalid email";
    }
  }

  // nu contine _ sau - inainte sau dupa @

  // 'cristian-@gmail.com'
  // 'cristian_@gmail.com'
  // 'cristian@-gmail.com'
  // 'cristian@_gmail.com'
  // 'cristian-@-gmail.com'

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      const characterBeforeArond = email[i - 1];
      const characterAfterArond = email[i + 1];

      if (characterBeforeArond === "-" || characterBeforeArond === "_") {
        return "Invalid email";
      }
      if (characterAfterArond === "-" || characterAfterArond === "_") {
        return "Invalid email";
      }
    }
  }

  // @ trebuie sa fie inainte de . <=> cautam . inainte de @ si daca exista => return "Invalid email"
  let indexOfArond;
  let indexOfDot;

  // 'cristian.predusca@gmail.com'
  //  email.length = 12
  // i = 0; 'c'
  // i = 1;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      indexOfArond = i; // 2
    }
    if (email[i] === ".") {
      indexOfDot = i;
    }
  }

  if (indexOfArond > indexOfDot) {
    return "Invalid email";
  }

  // @ trebuie sa nu se afle pe prima pozitie in string
  if (email[0] === "@") {
    return "Invalid email";
  }

  // Accesare a ultimului caracter din string ( intotdeauna lungimea stringului minus unu)
  //  "abcd" - 4
  //   0123
  //  email[email.length - 1]

  //   intre @ si . trebuie sa existe cel putin un caracter
  //   indexOfDot - indexOfArond > 1
  //    'cristian@a.gmail'
  //             8910
  if (indexOfDot - indexOfArond === 1) {
    return "Invalid email";
  }

  //   dupa . trebuie sa aiba minim 2 caractere
  //  'cristian@a.gmail'
  if (email[email.length - 1] === "." || email[email.length - 2] === ".") {
    return "Invalid email";
  }
};

const getTriangleType = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Invalid triangle";
  }
  if (
    a * a === b * b + c * c ||
    b * b === a * a + c * c ||
    c * c === a * a + b * b
  ) {
    return "Right Triangle";
  }
};

// Solutie pentru "Right Triangle"
// const sides = [a, b, c].sort((x, y) => x - y);
//   if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)) {
//     return 'Right Triangle';
//   }
