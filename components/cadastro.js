document.querySelector(`#salvar`).addEventListener("click", function (event) {
    window.alert("Cadastro feito com sucesso");

    const form = document.querySelector("form");

    form.reset();

    /*     const valorInput = document.querySelectorAll("form");
    
        valorInput.forEach(
            function (valor) {
                valor.reset();
            }
        ); */

    event.preventDefault();
})