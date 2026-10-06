const sorryBtn = document.getElementById("sorryBtn");
const escapeBtn = document.getElementById("escapeBtn");
const mainCard = document.getElementById("mainCard");
const forgiven = document.getElementById("forgiven");
const title = document.getElementById("title");
const message = document.getElementById("message");
const emoji = document.getElementById("emoji");
const hint = document.getElementById("hint");

let attempts = 0;

const messages = [
  ["😤", "Seriously?!", "That was your answer? Try again, husband. 😑"],
  ["🙄", "Nice try...", "The 'I did nothing' excuse has been rejected. 😂"],
  ["😈", "You can't escape!", "Your wife has activated SORRY MODE. 🚨"],
  ["🥺", "Last chance...", "Just say sorry and everything will be okay. ❤️"]
];

function moveButton() {
  attempts++;

  const data = messages[Math.min(attempts - 1, messages.length - 1)];
  emoji.textContent = data[0];
  title.textContent = data[1];
  message.textContent = data[2];

  const maxX = Math.max(20, window.innerWidth - escapeBtn.offsetWidth - 40);
  const maxY = Math.max(20, window.innerHeight - escapeBtn.offsetHeight - 40);

  escapeBtn.style.position = "fixed";
  escapeBtn.style.left = Math.random() * maxX + "px";
  escapeBtn.style.top = Math.random() * maxY + "px";

  hint.textContent =
    attempts >= 4
      ? "Okay okay... stop running and say SORRY. 😂❤️"
      : "The button knows you're guilty. 👀";
}

escapeBtn.addEventListener("mouseenter", moveButton);
escapeBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveButton();
});

escapeBtn.addEventListener("click", moveButton);

sorryBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  forgiven.classList.remove("hidden");
  document.body.style.background =
    "radial-gradient(circle at top, #ffe7f0, #ffb6d2 45%, #ff80ad)";
  launchHearts();
});

function launchHearts() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["❤️", "💕", "💖", "💗"][Math.floor(Math.random() * 4)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";
    heart.style.zIndex = "10";
    heart.style.transition = `transform ${2 + Math.random() * 3}s ease-out, opacity 3s`;
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-${110 + Math.random() * 70}vh) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 5000);
  }
}
