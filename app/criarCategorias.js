let ulCategorias = document.getElementById("categorias");

function filtrarCategorias(produtos) {
  let categorias = [];
  produtos.forEach((produto) => {
    if (!categorias.find((el) => el === produto.category)) {
      categorias.push(produto.category);
    }
  });
  return categorias;
}

function criarCategoria(produtos) {
  let categorias = filtrarCategorias(produtos);
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    li.setAttribute("class", "categorias");
    li.setAttribute("id", categoria);
    li.appendChild(document.createTextNode(categoria));
    li.addEventListener("click", () => {
      const produtosCategoria = [];
      for (const produto of produtos) {
        if (produto.category && produto.category == categoria) {
          produtosCategoria.push(produto);
        }
      }
      criarProdutos(produtosCategoria);
    });
    ulCategorias.appendChild(li);
  });
}
