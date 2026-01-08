const boy = document.getElementById("boy");
const obstacle = document.getElementById("obstacle");
const game = document.getElementById("game");

// Telefon va kompyuter uchun sakrash
function jump() {
  if (!boy.classList.contains("jump")) {
    boy.classList.add("jump");

    setTimeout(() => {
      boy.classList.remove("jump");
    }, 600);
  }
}

// Touch (telefon)
game.addEventListener("touchstart", jump);

// Klaviatura (kompyuter)
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});

// Urilish tekshiruvi
setInterval(() => {
  const boyBottom = parseInt(
    window.getComputedStyle(boy).getPropertyValue("bottom")
  );

  const obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstacleLeft < 60 && obstacleLeft > 20 && boyBottom < 50) {
    alert("❌ Yutqazdingiz!");
    location.reload();
  }
}, 10);
