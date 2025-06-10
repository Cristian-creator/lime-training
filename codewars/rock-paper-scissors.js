// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// p1 - "rock", "paper", "scissors"
// p2 - "rock", "paper", "scissors"

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw";

  if (p1 === "rock") {
    if (p2 === "paper") return "Player 2 won!";
    if (p2 === "scissors") return "Player 1 won!";
  }

  if (p1 === "paper") {
    if (p2 === "rock") return "Player 1 won!";
    if (p2 === "scissors") return "Playr 2 won!";
  }

  if (p1 === "scissors") {
    if (p2 === "rock") return "Player 2 won!";
    if (p2 === "paper") return "Player 1 won!";
  }
};

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
