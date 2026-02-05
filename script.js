const nameScreen = document.getElementById("nameScreen");
const cardScreen = document.getElementById("cardScreen");
const valText = document.getElementById("valText");
const noBtn = document.getElementById("noBtn");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startCard() {
    const name = document.getElementById("nameInput").value || "You";
    valText.innerHTML = `${name}, will you be my<br>valentine? 💖`;
    nameScreen.classList.add("hidden");
    cardScreen.classList.remove("hidden");
}

/* 😈 No button runs away */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* 🎊 Confetti */
let particles = [];

function yesClicked() {
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 20,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }
    animateConfetti();
    alert("YAY!! ❤️ Valentine accepted 💕");
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y -= Math.random() * 5 + 2;

        if (p.y < 0) particles.splice(i, 1);
    });

    if (particles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}
