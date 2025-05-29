// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

const capMe = (names) => {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    const formattedName =
      name[0].toUpperCase() + name.substring(1, name.length - 1).toLowerCase();

    result.push(formattedName);
  }

  return result;
};

const capMe2 = (names) => {
  return names.map((name) => {
    // if (typeof name !== "string" || name.length === 0) return "";

    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
};
