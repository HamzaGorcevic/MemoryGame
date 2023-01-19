let cardInner = document.querySelector(".flip-card-inner");

let main = document.querySelector(".main");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");

let slikeArr = [
  "banana.png",
  "apple.jpg",
  "orange.png",
  "banana.png",
  "apple.jpg",
  "orange.png",
];
easy.addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slike();
  createTable("easy");
});

medium.addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slikeArr.push("berry.jpg", "berry.jpg", "images.jpg", "images.jpg");
  slike();
  createTable("medium");
});

document.querySelector(".hard").addEventListener("click", () => {
  document.querySelector(".startMain").style.display = "none";
  slikeArr.push(
    "berry.jpg",
    "berry.jpg",
    "images.jpg",
    "images.jpg",
    "potato.jpg",
    "potato.jpg",
    "carrot.jpg",
    "carrot.jpg"
  );
  slike();
  createTable("hard");
});

function slike() {
  console.log(slikeArr);
  return slikeArr;
}

let chosenCards = [];
let idOfCards = [];
let wonCards = [];
let editArray = [];

function createTable(mode) {
  const shuffledArray = slike().sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);

  shuffledArray.map((el, index) => {
    let Card = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el);
    img.classList.add("imgFront");
    Card.classList.add("card");
    mode != "easy" ? Card.classList.add("hard") : "";
    Card.append(img);

    let back = document.createElement("div");
    back.classList.add("back");
    Card.append(back);
    Card.setAttribute("data-id", index);

    main.append(Card);
    Card.addEventListener("click", flipCard);
  });
}

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
          wonCards = [];
          playAgain = document.createElement("button");
          playAgain.innerText = "Play again";
          main.append(playAgain);

          playAgain.addEventListener("click", () => {
            window.location.reload();
          });
          alert("Congarts you won");
        }
      } else {
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
