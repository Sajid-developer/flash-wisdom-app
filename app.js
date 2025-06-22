const flashcard = document.getElementById("flashcard");
    const front = document.getElementById("card-front");
    const back = document.getElementById("card-back");

    const flashcards = [
      { question: "What is JavaScript?", answer: "A programming language for the web" },
      { question: "What is HTML?", answer: "The structure of web pages" },
      { question: "What is CSS?", answer: "The style of web pages" },
      { question: "What is React?", answer: "A JavaScript library for building UIs" },
    ];

    let currentIndex = 0;

    flashcard.addEventListener("click", () => {
      flashcard.classList.toggle("flip");
    });

    function updateCard() {
      front.textContent = flashcards[currentIndex].question;
      back.textContent = flashcards[currentIndex].answer;
      flashcard.classList.remove("flip");
    }

    function nextCard() {
      currentIndex = (currentIndex + 1) % flashcards.length;
      updateCard();
    }

    function prevCard() {
      currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
      updateCard();
    }