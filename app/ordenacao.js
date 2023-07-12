let ordemAlfabeticaAZ = document.getElementById("AZ");
ordemAlfabeticaAZ.addEventListener("click", nomeOrdemAlfabeticaAZ);
function nomeOrdemAlfabeticaAZ() {
  let inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  let produtosOrdenados = produtosFinais.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  criarProdutos(produtosOrdenados);
}

let ordemAlfabeticaZA = document.getElementById("ZA");
ordemAlfabeticaZA.addEventListener("click", nomeOrdemAlfabeticaZA);
function nomeOrdemAlfabeticaZA() {
  let inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  let produtosOrdenados = produtosFinais.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameB < nameA) {
      return -1;
    }
    if (nameB > nameA) {
      return 1;
    }
    return 0;
  });
  criarProdutos(produtosOrdenados);
}

let maiorValor = document.getElementById("maiorValor");
maiorValor.addEventListener("click", ordenaMaiorValor);
function ordenaMaiorValor() {
  let inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  let produtosMaiorValor = produtosFinais.sort((a, b) => {
    return b.price - a.price;
  });
  criarProdutos(produtosMaiorValor);
}

let menorValor = document.getElementById("menorValor");
menorValor.addEventListener("click", ordenamenorValor);
function ordenamenorValor() {
  let inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  let produtosMenorValor = produtosFinais.sort((a, b) => {
    return a.price - b.price;
  });
  criarProdutos(produtosMenorValor);
}

let melhoresAvaliados = document.getElementById("melhoresAvaliados");
melhoresAvaliados.addEventListener("click", ordenaMelhoresAvaliados);
function ordenaMelhoresAvaliados() {
  let inserirProdutos = document.getElementById("produtos");
  inserirProdutos.innerHTML = "";
  let produtosMelhoresAvaliados = produtosFinais.sort((a, b) => {
    return b.rating - a.rating;
  });
  criarProdutos(produtosMelhoresAvaliados);
}
