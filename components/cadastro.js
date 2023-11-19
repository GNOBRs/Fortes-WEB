document.querySelector("#salvar").addEventListener("click", function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("form input");

    let isFormValid = true;

    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        window.alert("Cadastro feito com sucesso");

        const form = document.querySelector("form");
        form.reset();
    } else {
        window.alert("Por favor, preencha todos os campos antes de salvar.");
    }
});
