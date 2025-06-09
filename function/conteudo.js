// funcao para interagir com os jogadores
let rodape = document.getElementById("rodadaplr");

const conteudoAll = {
  ctn1: document.getElementsByClassName("conteiner1")[0],
  ctn2: document.getElementsByClassName("conteiner2")[0],
  ctn3: document.getElementsByClassName("conteiner3")[0],
  ctn4: document.getElementsByClassName("conteiner4")[0],
  ctn5: document.getElementsByClassName("conteiner5")[0],
  ctn6: document.getElementsByClassName("conteiner6")[0],
  ctn7: document.getElementsByClassName("conteiner7")[0],
  ctn8: document.getElementsByClassName("conteiner8")[0],
  ctn9: document.getElementsByClassName("conteiner9")[0],
};
let escolherX = "X";
let estado = {};
Object.values(conteudoAll).forEach((elementos, index) => {
  estado[index] = "";

  elementos.onclick = () => {
    let img = document.createElement("img");
    while (elementos.firstChild) {
      elementos.removeChild(elementos.firstChild);
    }

    if (escolherX === "X") {
      img.src = "../assets/imgs/img_x.png";
      rodape.innerHTML = `É a vez do jogador ${player2.value}`;
    } else {
      img.src = "../assets/imgs/img_O.png";
      rodape.innerHTML = `É a vez do jogador ${player1.value}`;
    }

    elementos.appendChild(img);
    escolherX = escolherX === "X" ? "O" : "X";
    estado[index] = escolherX;

    vencerdor();
  };
  function vencerdor() {
    const verificar = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (combinacao of verificar) {
      const [a, b, c] = combinacao;

      if (estado[a] && estado[a] === estado[b] && estado[a] === estado[c]) {
        rodape.innerHTML = `O jogador ${
          estado[a] === "X" ? player1.value : player2.value
        } venceu`;
      }
    }
  }
});
