const messages = [
    {
        title: "For You ❤️",
        text: "Det finns något jag vill säga till dig. Ta din tid och öppna mitt meddelande.",
        button: "Öppna mitt hjärta ♡"
    },
    {
        title: "I'm Sorry",
        text: "Jag vet att jag har gjort dig ledsen. Jag önskar att jag hade hanterat saker annorlunda, och jag vill verkligen be om ursäkt.",
        button: "Fortsätt läsa ♥"
    },
    {
        title: "You Mean So Much",
        text: "Du betyder väldigt mycket för mig. Jag uppskattar alla fina stunder vi har delat, och jag vill aldrig ta dem för givna.",
        button: "Ett meddelande till ♡"
    },
    {
        title: "From My Heart",
        text: "Jag vet att ett förlåt inte automatiskt gör allting bra igen. Jag vill lyssna på dig, förstå hur du känner och visa genom mina handlingar att jag menar det.",
        button: "Öppna det sista brevet ♥"
    },
    {
        title: "I'm Truly Sorry ❤️",
        text: "Jag hoppas att du kan förlåta mig när du känner dig redo. Du behöver inte svara nu. Jag ville bara säga från hjärtat att jag är ledsen. ❤️",
        button: "Läs från början ↻"
    }
];

let currentStep = 0;

const heading = document.getElementById("heading");
const description = document.getElementById("description");
const nextButton = document.getElementById("nextButton");
const progress = document.getElementById("progress");
const messageBox = document.getElementById("message");

function showMessage() {
    const message = messages[currentStep];

    heading.textContent = message.title;
    description.textContent = message.text;
    nextButton.textContent = message.button;

    messageBox.classList.remove("fade");
    void messageBox.offsetWidth;
    messageBox.classList.add("fade");

    progress.innerHTML = "";

    messages.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";

        if (index <= currentStep) {
            dot.classList.add("active");
        }

        progress.appendChild(dot);
    });
}

nextButton.addEventListener("click", () => {
    currentStep++;

    if (currentStep >= messages.length) {
        currentStep = 0;
    }

    showMessage();
});

function createHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 15) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(createHeart, 1300);
}

showMessage();



