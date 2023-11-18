import TogglePopUp from "./popUp.js";
import InfoEditor from "./infoEditor.js";
import EditorRefeicao from "./editorRefeicao.js";

const x = document.querySelector(`#x`);
x.addEventListener("click", TogglePopUp);

const info = document.querySelector(`#info`);
info.addEventListener("click", InfoEditor);

const refeicoes = document.querySelectorAll(".refeicao");

refeicoes.forEach(function (refeicao) {
    refeicao.addEventListener("click", function () {
        EditorRefeicao(refeicao.id);
    });
});