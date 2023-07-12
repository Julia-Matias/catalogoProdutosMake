let ulMarcas = document.getElementById("marcas");

function filtrarMarcas(produtos) {
  let marcas = [];
  produtos.forEach((produto) => {
    if (!marcas.find((el) => el === produto.brand)) {
      marcas.push(produto.brand);
    }
  });
  return marcas;
}

function criarMarca(produtos) {
  let marcas = filtrarMarcas(produtos);
  marcas.forEach((marca) => {
    const li = document.createElement("li");
    li.setAttribute("class", "marcas");
    li.setAttribute("id", marca);
    li.appendChild(document.createTextNode(marca));
    li.addEventListener("click", () => {
      const produtosMarca = [];
      for (const produto of produtos) {
        if (produto.brand && produto.brand == marca) {
          produtosMarca.push(produto);
        }
      }
      criarProdutos(produtosMarca);
    });
    ulMarcas.appendChild(li);
  });
}
