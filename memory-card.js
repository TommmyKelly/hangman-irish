document.addEventListener("DOMContentLoaded", function () {
  const wordList = [
    "craic",
    "gaeilge",
    "sláinte",
    "cailleach",
    "ríomhaire",
    "comhrá",
    "saoire",
    "madra",
    "cathair",
    "fiáin",
    "snámh",
    "siopa",
    "súil",
    "gleoite",
    "tráthnóna",
    "fiacla",
    "pléascach",
    "codladh",
    "éadrom",
    "rámhaill",
    "grian",
    "lámh",
    "duilleog",
    "glasraí",
    "seomra",
    "cluiche",
    "ceol",
    "féileacán",
    "síolta",
  ];

  function getRandomEntries(list, numberOfEntries) {
    if (numberOfEntries > list.length) {
      console.error(
        "Number of entries requested is greater than the length of the list."
      );
      return [];
    }

    const shuffledList = [...list].sort(() => Math.random() - 0.5);
    return shuffledList.slice(0, numberOfEntries);
  }

  const words = getRandomEntries(wordList, 10);

  const memoryGame = document.querySelector(".memory-game");
  let flippedCards = [];
  let lockBoard = false;

  // Duplicate the words for matching pairs
  const symbols = [...words, ...words];

  // Shuffle the symbols
  symbols.sort(() => 0.5 - Math.random());

  // Create card elements and add them to the memory game
  symbols.forEach((word) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="front">${word}</div><div class="back">?</div>`;
    card.addEventListener("click", flipCard);
    memoryGame.appendChild(card);
  });

  // Shuffle the cards after a short delay
  setTimeout(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.classList.remove("flipped"));
  }, 2000);

  function flipCard() {
    if (lockBoard) return;
    if (this === flippedCards[0]) return;

    this.classList.add("flipped");
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      lockBoard = true;

      // Check for a match
      if (
        flippedCards[0].querySelector(".front").innerHTML ===
        flippedCards[1].querySelector(".front").innerHTML
      ) {
        setTimeout(() => {
          flippedCards.forEach((card) => card.classList.add("matched"));
          checkWin();
          resetBoard();
        }, 1000);
      } else {
        setTimeout(resetBoard, 1000);
      }
    }
  }

  function resetBoard() {
    flippedCards.forEach((card) => card.classList.remove("flipped"));
    flippedCards = [];
    lockBoard = false;
  }

  function checkWin() {
    const matchedCards = document.querySelectorAll(".card.matched");
    if (matchedCards.length === symbols.length) {
      alert("Congratulations! You won!");
      location.reload();
      // You can add more logic here, such as restarting the game.
    }
  }
});
