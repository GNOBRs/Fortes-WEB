const botaoPesquisa = document.querySelector('#pesquisar');
botaoPesquisa.addEventListener('click', function (event) {
    event.preventDefault();
    pesquisarPorNomeOuSobrenome();
});

var pessoas = [
    {
        nome: "Ana Silva Oliveira",
        cpf: "123.456.789-00",
        telefone: "(11) 98765-4321",
        email: "ana.silva@email.com"
    },
    {
        nome: "Pedro Santos Lima",
        cpf: "987.654.321-00",
        telefone: "(21) 87654-3210",
        email: "pedro.lima@email.com"
    },
    {
        nome: "Maria Costa Pereira",
        cpf: "234.567.890-11",
        telefone: "(31) 76543-2109",
        email: "maria.pereira@email.com"
    },
    {
        nome: "João Oliveira Santos",
        cpf: "345.678.901-22",
        telefone: "(41) 65432-1098",
        email: "joao.santos@email.com"
    },
    {
        nome: "Laura Lima Costa",
        cpf: "456.789.012-33",
        telefone: "(51) 54321-0987",
        email: "laura.costa@email.com"
    }
];


// Função de pesquisa por nome ou sobrenome
function pesquisarPorNomeOuSobrenome() {
    const nome = document.querySelector('#nome-input').value.trim().toLowerCase();
    var resultados = [];

    if (nome === '') {
        // Se o campo de pesquisa estiver vazio, limpar os campos e sair da função
        limparCampos();
        return;
    }

    for (var i = 0; i < pessoas.length; i++) {
        var nomeCompleto = pessoas[i].nome.toLowerCase();
        var partesNome = nomeCompleto.split(' ');

        for (var j = 0; j < partesNome.length; j++) {
            if (partesNome[j].includes(nome)) {
                resultados.push(pessoas[i]);
                break;  // Pare a busca ao encontrar uma correspondência
            }
        }
    }

    if (resultados.length > 0) {
        document.querySelector('#nome-input').value = resultados[0].nome;
        document.querySelector('#cpf-input').value = resultados[0].cpf;
        document.querySelector('#phone-input').value = resultados[0].telefone;
        document.querySelector('#email-input').value = resultados[0].email;
    } else {
        // Limpar os campos se nenhum resultado for encontrado
        limparCampos();
        alert("Nenhum resultado encontrado.");
    }
}

// Função para limpar os campos
function limparCampos() {
    document.querySelector('#nome-input').value = '';
    document.querySelector('#cpf-input').value = '';
    document.querySelector('#phone-input').value = '';
    document.querySelector('#email-input').value = '';
}
