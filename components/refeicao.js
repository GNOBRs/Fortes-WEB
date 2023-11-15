function Refeicao() {
    const chamaFuncao = CheckTime();

    const diaAtual = chamaFuncao.diaAtual;

    document.querySelector(`#pop`).insertAdjacentHTML('beforeend',
        `<h1 style="text-align: center;">Refeição atual</h1>
        <ul>
            <li>Arroz</li>
            <li>Feijao</li>
            <li>Bife de Frango Empanado</li>
        </ul>
        <form style="text-align: center;">
            <h2>Deseja Comer?</h2>
            <input class="inputRadio" type="radio" name="comer" id="sim" value="0">
            <label for="sim">Sim</label>
            <input class="inputRadio" type="radio" name="comer" id="nao" value="1" checked>
            <label for="nao">Não</label>
        </form>`)
}

export default Refeicao;