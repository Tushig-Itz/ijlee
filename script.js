const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const celebration = document.getElementById("celebration");

// The "No" button runs away and shrinks a little each time
let noBtnScale = 1;

function dodge() {
  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding * 2) + padding;
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding * 2) + padding;
  const tilt = Math.random() * 30 - 15;

  noBtnScale = Math.max(0.5, noBtnScale - 0.04);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transform = `scale(${noBtnScale}) rotate(${tilt}deg)`;
}

noBtn.addEventListener("mouseover", dodge);
noBtn.addEventListener("touchstart", dodge); // mobile support

// Yes = celebration + confetti
yesBtn.addEventListener("click", () => {
  celebration.style.display = "flex";
  celebration.classList.add("show");

  if (window.confetti) {
    const end = Date.now() + 2500;
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#ff4081', '#ff79a8', '#d81b60', '#ffd3e1']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#ff4081', '#ff79a8', '#d81b60', '#ffd3e1']
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }
});

// Gentle floating hearts in the background
const hearts = ['💖', '💕', '💗', '🌸', '✨'];
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 700);
