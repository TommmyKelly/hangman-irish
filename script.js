const words = [
  { irish: "craic", english: "fun" },
  { irish: "gaeilge", english: "Irish language" },
  { irish: "sláinte", english: "cheers" },
  { irish: "cailleach", english: "witch" },
  { irish: "ríomhaire", english: "computer" },
  { irish: "comhrá", english: "conversation" },
  { irish: "saoire", english: "holiday" },
  { irish: "madra", english: "dog" },
  { irish: "cathair", english: "city" },
  { irish: "fiáin", english: "wild" },
  { irish: "snámh", english: "swim" },
  { irish: "siopa", english: "shop" },
  { irish: "súil", english: "eye" },
  { irish: "gleoite", english: "cute" },
  { irish: "tráthnóna", english: "afternoon" },
  { irish: "fiacla", english: "teeth" },
  { irish: "pléascach", english: "explosive" },
  { irish: "codladh", english: "sleep" },
  { irish: "éadrom", english: "light" },
  { irish: "rámhaill", english: "rowing" },
  { irish: "grian", english: "sun" },
  { irish: "lámh", english: "hand" },
  { irish: "duilleog", english: "leaf" },
  { irish: "glasraí", english: "vegetables" },
  { irish: "seomra", english: "room" },
  { irish: "cluiche", english: "game" },
  { irish: "ceol", english: "music" },
  { irish: "féileacán", english: "butterfly" },
  { irish: "síolta", english: "seeds" },
  { irish: "ealadha", english: "wings" },
  { irish: "bogha", english: "rainbow" },
  { irish: "doras", english: "door" },
  { irish: "ubh", english: "egg" },
  { irish: "fiabhra", english: "fairy" },
  { irish: "teanga", english: "tongue" },
  { irish: "crosóg", english: "frog" },
  { irish: "leabhar", english: "book" },
  { irish: "fón", english: "phone" },
  { irish: "lampa", english: "lamp" },
  { irish: "éisc", english: "fish" },
  { irish: "fear", english: "man" },
  { irish: "bean", english: "woman" },
  { irish: "cnoc", english: "hill" },
  { irish: "cara", english: "friend" },
  { irish: "bróg", english: "shoe" },
  { irish: "géag", english: "branch" },
  { irish: "uachtar", english: "cream" },
  { irish: "clóca", english: "clock" },
];

let currentWordIndex = 0;

// ... (existing code)

function showWord() {
  const irishWordElement = document.getElementById("irishWord");
  const englishTranslationElement =
    document.getElementById("englishTranslation");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");

  irishWordElement.innerText = words[currentWordIndex].irish;
  englishTranslationElement.innerText = words[currentWordIndex].english;

  // Disable/enable Previous and Next buttons based on the current index
  previousButton.disabled = currentWordIndex === 0;
  nextButton.disabled = currentWordIndex === words.length - 1;
}

// function showPrevious() {
//   currentWordIndex = Math.max(0, currentWordIndex - 1);
//   showWord();

// }

// function showNext() {
//   currentWordIndex = Math.min(words.length - 1, currentWordIndex + 1);
//   showWord();

// }

// function showTranslation() {
//   currentWordIndex = (currentWordIndex + 1) % words.length;
//   showWord();
// }

function showPrevious() {
  currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
  resetCard();
  showWord();
}

function showNext() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  resetCard();
  showWord();
}

function showTranslation() {
  // Toggle the class to apply or remove the flip effect
  const card = document.getElementById("card");
  card.classList.toggle("flip-card-flipped");
}

function resetCard() {
  const card = document.getElementById("card");
  if (Array.from(card.classList).includes("flip-card-flipped")) {
    card.classList.toggle("flip-card-flipped");
  }
}

document.addEventListener("DOMContentLoaded", showWord);
