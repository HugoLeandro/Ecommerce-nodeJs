import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid border-2 border-sky-600 w-48 m-2 flex flex-col p-2 justify-between group" id="card-produto-1">
      <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class="group-hover:scale-110 duration-300 my-3"
      />
      <p>${produtoCatalogo.marca}</p>
      <p>${produtoCatalogo.nome}</p>
      <p>$${produtoCatalogo.preco}</p>
      <button class="bg-slate-950 hover:bg-slate-700 text-slate-200 ">
      <i class="fa-solid fa-cart-plus"></i>
      </button>
      </div>`;
      
        document.getElementById("container-produto").innerHTML += cartaoProduto;
      }
}

