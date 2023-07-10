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
    const inserirCategoria = document.getElementById("categorias");
    inserirCategoria.innerHTML += `<p class="categoria">${categoria}</p>`;
  });
  console.log(categorias);
}
