const logar = document.querySelector("#botaoLogin")

logar.addEventListener("click", verificarLogin)

function verificarLogin(event) {
    event.preventDefault();

    const login = document.querySelector("#login").value.trim()
    const senha = document.querySelector("#senha").value.trim()

    if (login == 'funcionario@fortes.com.br' && senha == 'rute') {
        window.location.href = "main.html"
    }
    else if (login == 'fornecedor@fortes.com.br' && senha == 'root') {
        window.location.href = "dashboard.html"
    } else {
        document.querySelector("#aviso").innerHTML = 'Login ou senha errados'
    }
}