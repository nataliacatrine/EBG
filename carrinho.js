document.addEventListener('DOMContentLoaded', (event) => {
  const botaoMenosUm = document.getElementById('botao-menos-1');
  const botaoMaisUm = document.getElementById('botao-mais-1');
  const quantidadeUm = document.getElementById('quantidade-1');
  const precoProdutoUm = document.getElementById('preco-1');
  const precoBaseUm = 30;

  const botaoMenosDois = document.getElementById('botao-menos-2');
  const botaoMaisDois = document.getElementById('botao-mais-2');
  const quantidadeDois= document.getElementById('quantidade-2');
  const precoProdutoDois = document.getElementById('preco-2');
  const precoBaseDois = 20;

  const precoCheckout =  document.getElementById('preco-checkout').querySelector('p');

  function atualizarPrecoCheckout(){
      const precoUm = parseInt(quantidadeUm.textContent) * precoBaseUm;
      const precoDois = parseInt(quantidadeDois.textContent) * precoBaseDois;
      const precoTotal = precoUm + precoDois;
      precoCheckout.textContent =  `R$${precoTotal.toFixed(2)}`;

      salvarValoresNoLocalStorage();
  }

  function salvarValoresNoLocalStorage() {
      const dadosCarrinho = {
          quantidadeUm: quantidadeUm.textContent,
          quantidadeDois: quantidadeDois.textContent,
          precoUm: precoProdutoUm.textContent,
          precoDois: precoProdutoDois.textContent,
          precoCheckout: precoCheckout.textContent,
          precototal: precoCheckout.textContent,
      };
      localStorage.setItem('dadosCarrinho', JSON.stringify(dadosCarrinho));
  }

  // Primeiro Produto
  botaoMenosUm.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidadeUm.textContent);
      if (quantidadeAtual > 1) {
          quantidadeAtual--;
          quantidadeUm.textContent = quantidadeAtual;
          precoProdutoUm.textContent = `R$${(quantidadeAtual * precoBaseUm).toFixed(2)}`;
          atualizarPrecoCheckout();
      }
  });

  botaoMaisUm.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidadeUm.textContent);
      quantidadeAtual++;
      quantidadeUm.textContent = quantidadeAtual;
      precoProdutoUm.textContent = `R$${(quantidadeAtual * precoBaseUm).toFixed(2)}`;
      atualizarPrecoCheckout();
  });

  //Segundo produto
  botaoMenosDois.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidadeDois.textContent);
      if (quantidadeAtual > 1) {
          quantidadeAtual--;
          quantidadeDois.textContent = quantidadeAtual;
          precoProdutoDois.textContent = `R$${(quantidadeAtual * precoBaseDois).toFixed(2)}`;
          atualizarPrecoCheckout();
      }
  });

  botaoMaisDois.addEventListener('click', () => {
      let quantidadeAtual = parseInt(quantidadeDois.textContent);
      quantidadeAtual++;
      quantidadeDois.textContent = quantidadeAtual;
      precoProdutoDois.textContent = `R$${(quantidadeAtual * precoBaseDois).toFixed(2)}`;
      atualizarPrecoCheckout();
  });

  atualizarPrecoCheckout(); // Chamada inicial para garantir que os valores sejam salvos no localStorage
});
