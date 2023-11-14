const logar = document.querySelector("#botaoLogin")

logar.addEventListener("click", verificarLogin)

function verificarLogin(event) {
    event.preventDefault();

    const login = document.querySelector("#login").value.trim()
    const senha = document.querySelector("#senha").value.trim()

    if (login == 'admin' && senha == 'rute') {
        window.location.href = "/main.html"
    }
    else {
        document.querySelector("#aviso").classList.add("active")
    }
}