const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // Generate a random number representing an index in colors
  const randomNumber = getRandomNumber();

  // Change background based on randomly selected color
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
