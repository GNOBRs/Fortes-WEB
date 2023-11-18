import TogglePopUp from "./popUp.js";

function InfoAgenda() {
    TogglePopUp();

    document.querySelector(`#pop`).insertAdjacentHTML('beforeend',
        `<h1 style="text-align: center;">Informações</h1>
        <p class="textoInfo">As áreas indicadas em cor azulada são as próximas refeições que podem ser alteradas no sistema caso queira comer ou não</p>
        <p class="textoInfo">Por padrão, caso não marque nenhuma opção, será automaticamente colocado como não irá comer</p>
        <p class="textoInfo">As áreas indicadas em cor azulada mudam automáticamente e são demonstradas somente no período em que se podem ser mudadas. Ou seja, só podem ser mudadas em até duas horas antes de cada refeição</p>
    `);
}

export default InfoAgenda;