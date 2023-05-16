// Passo 1 => Capturar o botão de troca de tema como um elemento.
const botaoAlterarTema = document.querySelector('#botao-alterar-tema')

// passo 2 => Pegar o elemento correspondente ao body
const body = document.querySelector('body')

const imgTrocaDeTema = document.querySelector('.imagem-botao')
// passo 3 => Capturar o clique no botão
botaoAlterarTema.addEventListener('click', () => {

    // Passo 6 => Verificar se o body contém a classe modo escuro
    modoEscuroAtivo = body.classList.contains('modo-escuro')
    if (modoEscuroAtivo) {
        // Passo 7 =>> Remover a classe do modo escuro
        body.classList.remove('modo-escuro')
        // Passo 8 => Trocar img de lua p/ sol
        imgTrocaDeTema.setAttribute('src', 'imagens/sun.png')
    } else {
        // Passo 4 => Adicionar a classe modo escuro
        body.classList.add("modo-escuro")

        // Passo 5 => Trocar img do sol p/ lua
        imgTrocaDeTema.setAttribute('src', 'imagens/moon.png')

    }
})