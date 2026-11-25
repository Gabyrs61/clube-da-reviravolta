// DATA DO PRÓXIMO ENCONTRO

const proximoEncontro = new Date(2026, 10, 29, 14, 0, 0);


// FUNÇÃO DO CONTADOR

function atualizarContador() {

    const agora = new Date();

    const diferenca = proximoEncontro - agora;


    // VERIFICA SE O ENCONTRO JÁ COMEÇOU

    if (diferenca <= 0) {

        document.getElementById("mensagem-contador").textContent =
            "Nosso encontro chegou! Um novo mistério nos espera.";

        document.querySelector(".relogio").style.display = "none";

        return;
    }


    // CALCULA DIAS, HORAS, MINUTOS E SEGUNDOS

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    const segundos = Math.floor((diferenca / 1000) % 60);


    // ATUALIZA OS NÚMEROS NO HTML

    document.getElementById("dias").textContent = dias;

    document.getElementById("horas").textContent = horas;

    document.getElementById("minutos").textContent = minutos;

    document.getElementById("segundos").textContent = segundos;

}


// ATUALIZA O CONTADOR A CADA SEGUNDO

atualizarContador();

setInterval(atualizarContador, 1000);