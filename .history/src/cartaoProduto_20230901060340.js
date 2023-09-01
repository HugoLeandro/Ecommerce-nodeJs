export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid border-2 border-sky-600 w-48" id="card-produto-1">
      <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        style="height: 300px"
      />
      <p>${produtoCatalogo.marca}</p>
      <p>${produtoCatalogo.nome}</p>
      <p>$${produtoCatalogo.preco}</p>
      <button>Adicionar</button>
      </div>`;
      
        document.getElementById("container-produto").innerHTML += cartaoProduto;
      }
}

