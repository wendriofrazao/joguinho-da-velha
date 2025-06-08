let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let nameTag1 = document.getElementsByClassName("nametag");
let nameTag2 = document.getElementsByClassName("nametag2");

// funcoes dos inputs para interagir com os nicknames/tags
function enterplr1(event) {
  let plr1 = player1.value;
  if (plr1 == "" && event.which == 13) {
    alert("Digite o NickName do jogador 1 para começar");
    setInterval(() => {
      location.reload();
    }, 1000);
  } else if (event.which == 13) {
    nameTag1[0].innerHTML = plr1;
  }
}
function enterplr2(event) {
  let plr2 = player2.value;
  if (plr2 == "" && event.which == 13) {
    alert("Digite o NickName do jogador 2 para começar");
    setInterval(() => {
      location.reload();
    }, 1000);
  } else if (event.which == 13) {
    nameTag2[0].innerHTML = plr2;
  }
}
