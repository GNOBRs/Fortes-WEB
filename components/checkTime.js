function CheckTime() {
    //Reescrita do código original feita por IA, com intuito de facilitar a manutenção, leitura e otimização do mesmo
    //** Adicionado conteúdo por mim no último else, corrigindo alguns erros e adicionando funcionalidades

    const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    const day = new Date().getDay();
    const hour = new Date().getHours();
    const diaAtual = diasSemana[day];

    return {
        diasSemana,
        day,
        hour,
        diaAtual
    };
}

export default CheckTime;