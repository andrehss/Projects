/*
Quando clicar no polemon da listagem esconderemos o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

Para isso vamos rpecisar trabalhar com dois elementos
1- Listagem
2- Cartão do pokemon

Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela




- Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar



*/

// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

/*Vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons*/
listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //Remover a classe aberto só do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- Remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //- Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})