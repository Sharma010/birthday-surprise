const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

function startSurprise() {
  // hide tap screen
  startScreen.style.display = "none";

  // show content
  mainContent.classList.remove("hidden");

  // 🔊 PLAY AUDIO (MOBILE SAFE)
  music.muted = false;
  music.volume = 0.7;

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log("Audio blocked:", err);
    });
  }

  // other animations can start AFTER
}

// 🔥 THIS IS KEY (touchstart)
startScreen.addEventListener("touchstart", startSurprise, { once: true });
startScreen.addEventListener("click", startSurprise, { once: true });
