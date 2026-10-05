const botoes = document.querySelectorAll(".botao-detalhes");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        alert("Para saber os valores e fazer uma reserva, entre em contato conosco!");

    });

});

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");

    formulario.reset();

});