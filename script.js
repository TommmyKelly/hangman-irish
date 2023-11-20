const words = [
  { irish: "Dia dhuit", english: "Hello" },
  { irish: "Slán go fóill", english: "Goodbye" },
  { irish: "Go raibh maith agat", english: "Thank you" },
  { irish: "Tá mé go maith", english: "I am well" },
  { irish: "Le do thoil", english: "Please" },
  { irish: "Cén t-am é?", english: "What time is it?" },
  { irish: "Conas atá tú?", english: "How are you?" },
  { irish: "Sláinte", english: "Cheers" },
  { irish: "Gabh mo leithscéal", english: "Excuse me" },
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

function showPrevious() {
  currentWordIndex = Math.max(0, currentWordIndex - 1);
  showWord();
}

function showNext() {
  currentWordIndex = Math.min(words.length - 1, currentWordIndex + 1);
  showWord();
}

function showTranslation() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  showWord();
}

function showPrevious() {
  currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
  showWord();
}

function showNext() {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  showWord();
}

function showTranslation() {
  // Toggle the class to apply or remove the flip effect
  const card = document.getElementById("card");
  card.classList.toggle("flip-card-flipped");
}

document.addEventListener("DOMContentLoaded", showWord);
