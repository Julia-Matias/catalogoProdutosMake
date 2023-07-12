let produtos = [];
const endpointAPI = "https://makeup-api.herokuapp.com/api/v1/products.json/";
buscarAPI();

let produtosFinais = [];

async function buscarAPI() {
  let res = await fetch(endpointAPI);
  produtos = await res.json();

  produtosFinais = produtos.filter((produto) => {
    return (
      produto.rating != null &&
      produto.brand != null &&
      produto.category != null
    );
  });
  criarMarca(produtosFinais);
  criarCategoria(produtosFinais);
  // buscaNome(produtosFinais);
}
