let cardInner = document.querySelector(".flip-card-inner");

let main = document.querySelector(".main");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let chances = 0;
let slikeArr = [
  "red.png",
  "yasuo.jpg",
  "crow.png",
  "leesin.jpg",
  "yasuo.jpg",
  "crow.png",
  "leesin.jpg",
  "red.png",
];
easy.addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slike();
  createTable("easy");
});

medium.addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slikeArr.push("robot.jpg", "robot.jpg", "tiger.png", "tiger.png");
  slike();
  createTable("medium");
});

document.querySelector(".hard").addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slikeArr.push(
    "robot.jpg",
    "robot.jpg",
    "tiger.png",
    "tiger.png",
    "crocodile.png",
    "crocodile.png",
    "lion.png",
    "lion.png"
  );
  slike();
  createTable("hard", slikeArr.length);
});

function slike() {
  console.log(slikeArr);
  return slikeArr;
}

let chosenCards = [];
let idOfCards = [];
let wonCards = [];
let editArray = [];
let counter = 0;
let time = document.querySelector(".time");
function createTable(mode, len) {
  let counting = setInterval(() => {
    counter++;
    time.innerHTML = `${counter}`;
  }, 1000);
  const shuffledArray = slike().sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);

  shuffledArray.map((el, index) => {
    let Card = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el);
    img.classList.add("imgFront");
    Card.classList.add("card");
    // mode != "easy" ? Card.classList.add("hard") : "";
    Card.append(img);

    let back = document.createElement("div");
    back.classList.add("back");
    Card.append(back);
    Card.setAttribute("data-id", index);

    main.append(Card);
    Card.addEventListener("click", flipCard);
  });
}
let playAgain = document.querySelector(".playAgain");
let resultTime = document.querySelector(".timeE");
let resultMistakes = document.querySelector(".scoreE");
let ended = document.querySelector(".end");
let chancesEl = document.querySelector(".score");
function flipCard(el) {
  let idOfCard = this.getAttribute("data-id");
  this.children[0].classList.add("rotate");
  this.children[1].classList.add("rotateBack");
  chosenCards.push(this.children[0].src);
  idOfCards.push(idOfCard);
  editArray.push(this);

  if (chosenCards.length == 2) {
    setTimeout(() => {
      var cards = document.querySelectorAll("img");
      console.log(cards[0]);

      if (idOfCards[0] != idOfCards[1] && chosenCards[0] == chosenCards[1]) {
        wonCards.push(chosenCards[0]);
        if (wonCards.length == slike().length / 2) {
          resultMistakes.innerHTML = `${chances}`;
          resultTime.innerHTML = `${counter}`;
          ended.style.height = "100%";
          wonCards = [];

          playAgain.addEventListener("click", () => {
            window.location.reload();
          });
        }
      } else {
        chances++;
        chancesEl.innerHTML = `${chances}`;
        editArray[0].children[0].classList.remove("rotate");
        editArray[0].children[1].classList.remove("rotateBack");
        editArray[1].children[0].classList.remove("rotate");
        editArray[1].children[1].classList.remove("rotateBack");
        chosenCards = [];
        idOfCards = [];
        editArray = [];
      }
      chosenCards = [];
      idOfCards = [];
      editArray = [];
    }, 500);
  }
}
