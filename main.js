let produtos = [];
const endpointAPI = "https://makeup-api.herokuapp.com/api/v1/products.json/";
getBuscarAPI();

async function getBuscarAPI() {
  const resposta = await fetch(endpointAPI);
  produtos = await resposta.json();
  // console.log(produtos);
  // exibirProdutos(produtos);
}

const inserirProdutos = document.getElementById("produtos");

// function exibirProdutos(produtos) {
//   produtos.forEach((produto) => {
//     inserirProdutos.innerHTML += `
//     <div class="produto__detalhe">
//     <img class="produto__detalhe__imagem" src="${produto.image_link}">
//     <h2 class="produto__detalhe__nome">${produto.name}</h2>
//       <div class="produto__detalhe__marca__preco">
//           <p class="produto__detalhe__marca">${produto.brand}</p>
//           <p class="produto__detalhe__preco">${produto.price_sign}${produto.price}</p>
//       </div>
//     </div>`;
//   });
// }
