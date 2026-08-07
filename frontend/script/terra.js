const botoes = document.querySelectorAll(".btn-toggle");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const conteudo = botao.nextElementSibling;

        conteudo.classList.toggle("ativo");

        if (conteudo.classList.contains("ativo")) {
            botao.textContent = "Ocultar";
        } else {
            botao.textContent = "Ler mais";
        }

    });

});