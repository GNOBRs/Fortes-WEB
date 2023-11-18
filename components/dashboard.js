function generateRandomData(length) {
    const randomData = [];
    for (let i = 0; i < length; i++) {
        randomData.push(Math.floor(Math.random() * (100 - 20 + 1)) + 20); // Gera números aleatórios entre 20 e 100
    }
    return randomData;
}

// Simulando dados aleatórios
const data = {
    day: generateRandomData(1),
    week: generateRandomData(7),
    month: generateRandomData(30)
};

// Função para gerar gráfico usando Chart.js
function generateChart(containerId, label, data, xLabels) {
    const container = document.getElementById(containerId);

    const chartContainer = document.createElement("div");
    container.appendChild(chartContainer);

    const canvas = document.createElement("canvas");
    chartContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Pessoas Alimentadas',
                data: data,
                fill: false,
                borderColor: '#4CAF50',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category', // Altera o tipo de escala para categoria
                    labels: containerId === 'weekChart' ? ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'] : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // Substitui os números pelos dias da semana
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return 'Pessoas: ' + context.parsed.y;
                        }
                    }
                }
            }
        }
    });
}

// Função para atualizar os números na página
function updateNumbers() {
    document.getElementById("dayCount").innerText = data.day.reduce((a, b) => a + b, 0);
    document.getElementById("weekCount").innerText = data.week.reduce((a, b) => a + b, 0);
    document.getElementById("monthCount").innerText = data.month.reduce((a, b) => a + b, 0);
}

// Gera os gráficos iniciais
generateChart("weekChart", ["Semana"], data.week);
generateChart("monthChart", ["Mês"], data.month, Array.from({ length: 12 }, (_, i) => i + 1));

// Atualiza os números na inicialização
updateNumbers();