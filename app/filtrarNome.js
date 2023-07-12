let listaProdutos = [];

function buscaNome(produtos) {
  listaProdutos = [];
  let nomeProduto = document.getElementById("nomeProduto").value;
  for (const produto of produtos) {
    if (produto.name.toUpperCase().includes(nomeProduto.toUpperCase())) {
      listaProdutos.push(produto);
    }
  }
  criarProdutos(listaProdutos);
}
