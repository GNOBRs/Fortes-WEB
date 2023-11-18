import TogglePopUp from "./popUp.js";

function RefeicaoEditor(refeicao){
    const valor = document.querySelector(".inputEditor").value;

    document.querySelector(`#${refeicao}`).firstElementChild.innerHTML = `${valor.trim()}`

    TogglePopUp();
};

export default RefeicaoEditor;