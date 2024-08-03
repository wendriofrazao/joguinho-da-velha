// botao para resentar tudo
let button = document.getElementById("restart");
button.addEventListener("click", () => {
  Object.values(conteudoAll).forEach(() => {
    let img = document.querySelector("img");
    if (img) {
      img.remove();
      return (rodape.innerHTML = `É a vez do jogador ${player1.value}`);
    }
  });
});
