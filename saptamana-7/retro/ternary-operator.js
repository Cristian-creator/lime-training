// --- Ternary Operator ---
// Definitie de strada: replacement pentru if/else in cazuri light

const username = "";

// Before
// const getWelcomeMessage = (name) => {
//   return name.length > 0 ? `Hello, ${name}!` : `Hello, Guest!`;
// };

// After
const getWelcomeMessage = (name) =>
  name.length > 0 ? `Hello, ${name}!` : `Hello, Guest!`;

// -- Varianta if/else --
// if (username.length > 0) {
//   console.log(`Hello, ${username}!`);
// } else {
//   console.log(`Hello, Guest!`);
// }
