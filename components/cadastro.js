const cpfCampo = document.querySelector(`#cpf-input`);
const cpfMask = new Cleave(cpfCampo, {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2]
});

const telefoneCampo = document.querySelector(`#phone-input`);
const telefoneMask = new Cleave(telefoneCampo, {
    delimiters: ['(', ')', ' ', '-'],
    blocks: [0, 2, 0, 5, 4]
});

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
