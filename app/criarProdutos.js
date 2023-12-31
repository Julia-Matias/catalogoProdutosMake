function criarProdutos(produtos) {
  const inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  produtos.forEach((produto) => {
    inserirProdutos.innerHTML += `
    <div class="produto__detalhe">
      <img class="produto__detalhe__imagem" src="${produto.image_link}">
      <h2 class="produto__detalhe__nome" >${produto.name}</h2>
        <div class="produto__detalhe__marca__preco">
            <p class="produto__detalhe__marca">${produto.brand}</p>
            <p class="produto__detalhe__preco"> $${produto.price}</p>
        </div>
        <p class="produto__detalhe__avaliacoes">Avaliação ${produto.rating} </p>
      </div>`;
  });
}
