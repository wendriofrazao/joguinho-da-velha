let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let nameTag1 = document.getElementsByClassName("nametag");
let nameTag2 = document.getElementsByClassName("nametag2");

const conteiner = [
  document.getElementsByClassName("conteiner1")[0],
  document.getElementsByClassName("conteiner2")[0],
  document.getElementsByClassName("conteiner3")[0],
  document.getElementsByClassName("conteiner4")[0],
  document.getElementsByClassName("conteiner5")[0],
  document.getElementsByClassName("conteiner6")[0],
  document.getElementsByClassName("conteiner7")[0],
  document.getElementsByClassName("conteiner8")[0],
  document.getElementsByClassName("conteiner9")[0],
];

let rodape = document.getElementById("rodadaplr");
const conteinerMain = document.getElementById("content_main");

const escolherX = "X";
const escolherO = "O";
let storageState = "";

conteiner.map((elements, index) => {
  elements.addEventListener("click", () => {
    if (elements[index] == null) {
      elementX(elements);
      storageState = escolherX;
    } else if (
      (elements[index] = elementX(elements) || storageState.contains(escolherX))
    ) {
      elementO(elements);
      storageState = escolherO;
    }
  });
});

const elementX = (element) => {
  if (!element.querySelector("img")) {
    let imgX = document.createElement("img");
    imgX.src = "../assets/imgs/img_x.png";
    element.appendChild(imgX);
  }
};

const elementO = (element) => {
  if (!element.querySelector("img")) {
    let imgO = document.createElement("img");
    imgO.src = "../assets/imgs/img_O.png";
    element.appendChild(imgX);
  }
};
