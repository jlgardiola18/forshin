/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);

});

/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.getElementById("hearts");

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💖", "💕", "💗"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    heart.style.opacity =
        Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

/* Generate Hearts */
setInterval(createHeart, 220);

/* =========================
   ENVELOPE
========================= */

function openEnvelope() {

    const overlay =
        document.getElementById("overlay");

    const envelope =
        document.getElementById("envelope");

    overlay.style.display = "flex";

    setTimeout(() => {
        envelope.classList.add("open");
    }, 200);
}

function closeEnvelope() {

    const overlay =
        document.getElementById("overlay");

    const envelope =
        document.getElementById("envelope");

    envelope.classList.remove("open");

    setTimeout(() => {
        overlay.style.display = "none";
    }, 700);
}

/* =========================
   HEART BURST
========================= */

document.addEventListener("click", (e) => {

    for (let i = 0; i < 8; i++) {

        const burst =
            document.createElement("div");

        burst.classList.add("heart");

        burst.innerHTML = "💖";

        burst.style.left =
            e.clientX + (Math.random() * 80 - 40) + "px";

        burst.style.top =
            e.clientY + (Math.random() * 80 - 40) + "px";

        burst.style.position = "fixed";

        burst.style.fontSize =
            Math.random() * 20 + 10 + "px";

        burst.style.animationDuration =
            Math.random() * 2 + 2 + "s";

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 3000);
    }

});