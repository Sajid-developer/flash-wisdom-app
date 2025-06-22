const flashcard = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");

const flashcards = [
    { question: "What is the difference between <div> and <span> in HTML?", answer: "<div> is block-level, <span> is inline-level." },
    { question: "Why is semantic HTML important?", answer: "It improves accessibility and SEO by giving meaning to content." },
    { question: "What does the 'defer' attribute do in a <script> tag?", answer: "It delays script execution until HTML parsing is done." },
    { question: "What’s the difference between id and class in HTML?", answer: "id is unique; class can be shared by multiple elements." },
    { question: "What are pseudo-classes in CSS?", answer: "Special states like :hover, :first-child, etc., applied to selectors." },
    { question: "How is 'position: absolute' different from 'position: relative'?", answer: "'absolute' is positioned relative to nearest positioned ancestor, 'relative' is relative to itself." },
    { question: "What does z-index control in CSS?", answer: "It controls the stack order of overlapping elements." },
    { question: "How does the box model work in CSS?", answer: "Content → Padding → Border → Margin." },
    { question: "What is the difference between == and === in JavaScript?", answer: "== compares value only, === compares value and type." },
    { question: "What are arrow functions in JavaScript?", answer: "A shorter syntax for writing functions using =>." },
    { question: "What is event bubbling in JavaScript?", answer: "Events propagate from the target element up to the DOM tree." },
    { question: "What is the purpose of 'addEventListener'?", answer: "It attaches an event handler to an element." },
    { question: "How can you prevent a form from submitting in JavaScript?", answer: "Use event.preventDefault() in the submit handler." },
    { question: "What are template literals in JavaScript?", answer: "Strings with embedded expressions using backticks ` `" },
    { question: "What is a callback function?", answer: "A function passed as an argument to another function." },
    { question: "How do you select all elements with a class in JS?", answer: "document.querySelectorAll('.className')" },
    { question: "What is localStorage in JavaScript?", answer: "A way to store key/value pairs in the browser that persist even after reload." },
    { question: "What does the 'this' keyword refer to in a method?", answer: "It refers to the object the method belongs to." },
    { question: "What is a closure in JavaScript?", answer: "A function that has access to its outer function's scope." },
    { question: "How can you loop through an array in JavaScript?", answer: "Using for loop, forEach(), map(), etc." }
];

flashcards.sort((a, b) => Math.random() - 0.5);


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
updateCard();