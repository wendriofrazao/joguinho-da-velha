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

const rodape = document.getElementById("rodadaplr");
const conteinerMain = document.getElementById("content_main");

const escolherX = "X";
const escolherO = "O";

conteiner.map((elements) => {
  elements.addEventListener("click");
});
