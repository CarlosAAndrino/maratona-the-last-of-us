const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        selecionarBotaoCarrossel(botao);
        esconterImagemAtiva();
        mostrarImagemDeFundo(indice);
    })  
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconterImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
