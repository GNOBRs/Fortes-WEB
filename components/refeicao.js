import TogglePopUp from "./popUp.js";

function Refeicao() {
    TogglePopUp();

    const elementoFilhoDia = document.querySelector(".refeicao.ativo").innerHTML

    document.querySelector(`#pop`).insertAdjacentHTML('beforeend',
        `<div class="container-refeicao-atual">
            <div>
                <h1 style="text-align: center;">Refeição atual</h1>
                ${elementoFilhoDia}
            </div>            
            <form class="flexEnd">
                <h2>Deseja Comer?</h2>
                <input class="inputRadio" type="radio" name="comer" id="sim" value="0">
                <label for="sim">Sim</label>
                <input class="inputRadio" type="radio" name="comer" id="nao" value="1" checked>
                <label for="nao">Não</label>
            </form>
        </div>`
    )
}

export default Refeicao;