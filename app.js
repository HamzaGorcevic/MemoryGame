let cardInner = document.querySelector(".flip-card-inner");

let main = document.querySelector(".main");

let slike = [
  "banana.png",
  "apple.jpg",
  "orange.png",
  "banana.png",
  "apple.jpg",
  "orange.png",
];

let chosenCards = [];
let idOfCards = [];
let wonCards = [];
let editArray = [];

function createTable() {
  const shuffledArray = slike.sort((a, b) => 0.5 - Math.random());
  console.log(shuffledArray);

  shuffledArray.map((el, index) => {
    let Card = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", el);
    img.classList.add("imgFront");
    Card.classList.add("card");
    Card.append(img);

    let back = document.createElement("div");
    back.classList.add("back");
    Card.append(back);
    Card.setAttribute("data-id", index);

    main.append(Card);
    Card.addEventListener("click", flipCard);
  });
}
createTable();

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
      console.log(cards);

      if (idOfCards[0] != idOfCards[1] && chosenCards[0] == chosenCards[1]) {
        console.log(idOfCards[0] != idOfCards[1]);
        wonCards.push(chosenCards[0]);

        if (wonCards.length == 3) {
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
