import TogglePopUp from "./popUp.js";

function InfoEditor() {
    TogglePopUp();
    document.querySelector(`#pop`).insertAdjacentHTML('beforeend',
        `
            <h1 style="text-align: center;">Informações</h1>
            <p class="textoInfo">Clique na refeição que deseja editar</p>
            <p class="textoInfo">Ao clicar na refeição, uma tela pop-up aparecerá com um campo digitável. O que for digitado nesse campo será a nova refeição</p>
            <p class="textoInfo">As alterações são salvas ao clicar no botão de salvar ou ao fechar a tela de pop-up</p>
        `);
}

export default InfoEditor;