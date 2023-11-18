import SetAtivo from "./setAtivo.js";
import TogglePopUp from "./popUp.js";
import InfoAgenda from "./infoAgenda.js";
import Refeicao from "./refeicao.js";

for (var i = 0; i <= 0; i++) {
    SetAtivo();
}

setInterval(SetAtivo, 90 * 1000);

const x = document.querySelector(`#x`);
x.addEventListener("click", TogglePopUp);

const info = document.querySelector(`#info`);
info.addEventListener("click", InfoAgenda);

var refeicao = document.querySelector(".refeicao.ativo");
refeicao.addEventListener("click", Refeicao);