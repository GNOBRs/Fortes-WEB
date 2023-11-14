function checkTime() {
    // Otimizado por IA
    var diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    var day = new Date().getDay();
    var hour = new Date().getHours();

    var diaAtual = diasSemana[day];

    if (hour < 20) {
        document.querySelector(`#${diaAtual}`).firstElementChild.classList.add("ativo");
        document.getElementById(diaAtual).style.backgroundColor = 'rgb(194, 194, 194)';
    } else {
        var proximoDia = diasSemana[(day + 1) % 7];
        document.querySelector(`#${proximoDia}`).firstElementChild.classList.add("ativo");
        document.querySelector(`#jantar${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.remove("ativo");

        if (document.querySelector(`#${diaAtual}`).firstElementChild.classList != null) {
            document.getElementById(diaAtual).style.backgroundColor = 'inherit';
            document.getElementById(proximoDia).style.backgroundColor = 'rgb(194, 194, 194)';
        } else {
            document.getElementById(diaAtual).firstElementChild.classList.remove("ativo");
        }
    }


    if (hour >= 8 && hour < 10) {
        document.querySelector("#cafe").classList.add("ativo");
        document.querySelector(`#cafe${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.add("ativo");
    } else if (hour >= 10 && hour < 14) {
        document.querySelector("#almoco").classList.add("ativo");
        document.querySelector(`#almoco${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.add("ativo");
    } else if (hour >= 14 && hour < 17) {
        document.querySelector("#lanche").classList.add("ativo");
        document.querySelector(`#lanche${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.add("ativo");
    } else if (hour >= 17 && hour < 20) {
        document.querySelector("#jantar").classList.add("ativo");
        document.querySelector(`#jantar${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.add("ativo");
    } else {
        var proximoDia = diasSemana[(day + 1) % 7];
        document.querySelector(`#jantar${diaAtual.charAt(0).toUpperCase() + diaAtual.slice(1)}`).classList.remove("ativo");
        document.querySelector(`#cafe${proximoDia.charAt(0).toUpperCase() + proximoDia.slice(1)}`).classList.add("ativo");
    }
    /*  Escrito por mim
        let day = new Date().getDay();
        let hour = new Date().getHours();
    
        if (day == '0') {
            document.querySelector("#domingo").firstElementChild.classList.add("ativo");
            document.getElementById("domingo").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeDomingo").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoDomingo").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheDomingo").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarDomingo").classList.add("ativo");
            } else {
                document.querySelector("#jantarSegunda").classList.add("ativo");
            }
        } else if (day == '1') {
            document.querySelector("#segunda").firstElementChild.classList.add("ativo");
            document.getElementById("segunda").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeSegunda").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoSegunda").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheSegunda").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarSegunda").classList.add("ativo");
            } else {
                document.querySelector("#jantarTerca").classList.add("ativo");
            }
        } else if (day == '2') {
            document.querySelector("#terca").firstElementChild.classList.add("ativo");
            document.getElementById("terca").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeTerca").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoTerca").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheTerca").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarTerca").classList.add("ativo");
            } else {
                document.querySelector("#jantarQuarta").classList.add("ativo");
            }
        } else if (day == '3') {
            document.querySelector("#quarta").firstElementChild.classList.add("ativo");
            document.getElementById("quarta").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeQuarta").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoQuarta").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheQuarta").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarQuarta").classList.add("ativo");
            } else {
                document.querySelector("#jantarQuinta").classList.add("ativo");
            }
        } else if (day == '4') {
            document.querySelector("#quinta").firstElementChild.classList.add("ativo");
            document.getElementById("quinta").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeQuinta").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoQuinta").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheQuinta").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarQuinta").classList.add("ativo");
            } else {
                document.querySelector("#jantarSexta").classList.add("ativo");
            }
        } else if (day == '5') {
            document.querySelector("#sexta").firstElementChild.classList.add("ativo");
            document.getElementById("sexta").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeSexta").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoSexta").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheSexta").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarSexta").classList.add("ativo");
            } else {
                document.querySelector("#jantarSabado").classList.add("ativo");
            }
        } else if (day == '6') {
            document.querySelector("#sabado").firstElementChild.classList.add("ativo");
            document.getElementById("sabado").style.backgroundColor = 'rgb(194, 194, 194)'
            if (hour >= 8 && hour < 10) {
                document.querySelector("#cafe").classList.add("ativo");
                document.querySelector("#cafeSabado").classList.add("ativo");
            } else if (hour >= 10 && hour < 14) {
                document.querySelector("#almoco").classList.add("ativo");
                document.querySelector("#almocoSabado").classList.add("ativo");
            } else if (hour >= 14 && hour < 17) {
                document.querySelector("#lanche").classList.add("ativo");
                document.querySelector("#lancheSabado").classList.add("ativo");
            } else if (hour >= 17 && hour < 20) {
                document.querySelector("#jantar").classList.add("ativo");
                document.querySelector("#jantarSabado").classList.add("ativo");
            } else {
                document.querySelector("#jantarDomingo").classList.add("ativo");
            }
        } */
};


for (var i = 0; i <= 0; i++) {
    checkTime();
}

setInterval(checkTime, 10 * 1000);