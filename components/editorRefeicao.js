import TogglePopUp from "./popUp.js";
import RefeicaoEditor from "./refeicaoEditor.js";

function EditorRefeicao(refeicao) {
    TogglePopUp();

    console.log(refeicao)

    const comida = document.querySelector(`#${refeicao}`);

    document.querySelector(`#pop`).insertAdjacentHTML('beforeend',
        `
        <form class="popUpContent">
            <h1>Editar Refeição</h1>
            <textarea class="inputEditor" id="comidaRefeicao">${comida.firstElementChild.innerHTML}</textarea>
            <button type="submit" id="salvarButton">Salvar</button>
        </form>
        `);
    
    document.getElementById("comidaRefeicao").addEventListener("focusout",
    function (event) {
        event.preventDefault();
        RefeicaoEditor(refeicao);
    });
}

export default EditorRefeicao;