const mybtn = document.getElementById("mybtn");
const myh3 = document.getElementById("myh3");
const attemptsLeftElement = document.getElementById("myh4");
const min = 1;
const max = 50;
let a = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 5;

function updateAttemptsDisplay() {
  attemptsLeftElement.innerHTML = attempts;
}

mybtn.onclick = function () {
  let i = Number(document.getElementById("myinput").value);
  console.log(a);

  if (i < min || i > max || isNaN(i)) {
    myh3.innerHTML = `Not a valid input!! Please enter a number between ${min} and ${max}.`;
    return;
  }

  if (i === a) {
    myh3.innerHTML = `Hurray!!! You won !!!`;
    mybtn.disabled = true;
  } else {
    attempts--;
    if (attempts <= 0) {
      updateAttemptsDisplay();
      myh3.innerHTML = `Game over! The number was ${a}.`;
      mybtn.disabled = true;
    } else {
      if (i < a) {
        myh3.innerHTML = `Oops!! It's too small!!`;
      } else {
        myh3.innerHTML = `Oops!! It's too big!!`;
      }
      updateAttemptsDisplay();
    }
  }
};

updateAttemptsDisplay();
