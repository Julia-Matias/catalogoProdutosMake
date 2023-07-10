let produtos = [];
const endpointAPI = "https://makeup-api.herokuapp.com/api/v1/products.json/";
buscarAPI();

async function buscarAPI() {
  let res = await fetch(endpointAPI);
  produtos = await res.json();

  let produtosFinais = produtos.filter((produto) => {
    return (
      produto.rating != null &&
      produto.brand != null &&
      produto.category != null
    );
  });

  criarProdutos(produtosFinais);
  criarMarca(produtosFinais);
  criarCategoria(produtosFinais);
}
