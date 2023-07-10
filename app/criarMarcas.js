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
    const inserirMarca = document.getElementById("marcas");
    inserirMarca.innerHTML += `<p class="marcas">${marca}</p>`;
  });
}
