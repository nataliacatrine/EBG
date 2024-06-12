document.addEventListener('DOMContentLoaded', (event) => {
    const botaoMenos = document.getElementById('botao-menos');
    const botaoMais = document.getElementById('botao-mais');
    const quantidade = document.getElementById('quantidade');
    const precoProduto = document.getElementById('preco-produto');
    const precoBase = 20;
  
    botaoMenos.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidade.textContent);
      if (quantidadeAtual > 1) {
        quantidadeAtual--;
        quantidade.textContent = quantidadeAtual;
        precoProduto.textContent = `R$${(quantidadeAtual * precoBase).toFixed(2)}`;
      }
    });
  
    botaoMais.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidade.textContent);
      quantidadeAtual++;
      quantidade.textContent = quantidadeAtual;
      precoProduto.textContent = `R$${(quantidadeAtual * precoBase).toFixed(2)}`;
    });
});
  