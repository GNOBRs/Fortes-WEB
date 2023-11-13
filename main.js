const logar = document.querySelector("#botaoLogin")

logar.addEventListener("click", verificarLogin)

function verificarLogin(event) {
    event.preventDefault();

    const login = document.querySelector("#login").value.trim()
    const senha = document.querySelector("#senha").value.trim()

    if (login == 'admin') {
        if (senha == '1234') {
            window.location.href = "https://www.google.com"
        } else {
            window.alert("Senha errada")
            console.log("Senha errada")
        }
    } else {
        window.alert("Login errado")
        console.log("Login errado")
    }
}