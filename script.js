const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
alert("Uwaaaa Thank you Ijlee💖");
});