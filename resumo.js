document.addEventListener('DOMContentLoaded', (event) => {
    // Função para recuperar os valores do localStorage
    function recuperarValoresDoLocalStorage() {
        const dadosCarrinho = JSON.parse(localStorage.getItem('dadosCarrinho'));
        if (dadosCarrinho) {
            const quantidadeUm = document.getElementById('quantidade-1');
            const quantidadeDois = document.getElementById('quantidade-2');
            const precoProdutoUm = document.getElementById('preco-1');
            const precoProdutoDois = document.getElementById('preco-2');
            const precoCheckout = document.getElementById('preco-checkout');
            const precoTotal = document.getElementById('preco-total');

            quantidadeUm.textContent = dadosCarrinho.quantidadeUm;
            quantidadeDois.textContent = dadosCarrinho.quantidadeDois;
            precoProdutoUm.textContent = dadosCarrinho.precoUm;
            precoProdutoDois.textContent = dadosCarrinho.precoDois;
            precoCheckout.textContent = dadosCarrinho.precoCheckout;
            precoTotal.textContent=dadosCarrinho.precoCheckout;
        }
    }

    recuperarValoresDoLocalStorage(); // Chamar a função para recuperar os valores do localStorage
});
