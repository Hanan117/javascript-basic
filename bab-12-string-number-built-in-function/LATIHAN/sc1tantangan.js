// sc1 tantangan


const username = "   AB   ";

const terbaru = username.trim();
console.log(terbaru);

console.log("username :"+ terbaru.toLocaleLowerCase());

if (username.length > 8) {
  console.log("Username :valid");
} else {
  console.log("Username terlalu pendek");
}