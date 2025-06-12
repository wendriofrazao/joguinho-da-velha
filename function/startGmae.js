const startGame = document.getElementById("btnGameStart");

startGame.addEventListener("click", gameStart);

function gameStart() {
  const mainGame = document.getElementById("content_main");
  const buttonReset = document.getElementById("restart");
  const roundPlayer = document.getElementById("rodadaplr");

  mainGame.style.display = "grid";
  buttonReset.style.display = "block";
  roundPlayer.style.display = "block";
  startGame.style.display = "none";
}
