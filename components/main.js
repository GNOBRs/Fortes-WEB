import SetAtivo from "./setAtivo.js";
import TogglePopUp from "./popUp.js";
import Info from "./info.js";
import Refeicao from "./refeicao.js";

for (var i = 0; i <= 0; i++) {
    SetAtivo();
}

setInterval(SetAtivo, 90 * 1000);

const x = document.querySelector(`#x`);
x.addEventListener("click", TogglePopUp);

const info = document.querySelector(`#info`);
info.addEventListener("click", TogglePopUp);
info.addEventListener("click", Info);

const refeicao = document.querySelector(".refeicao.ativo");
refeicao.addEventListener("click", TogglePopUp);
refeicao.addEventListener("click", Refeicao);