import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
      document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
      <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i
          class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
        ></i>
      </button>
      <img
        src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg"
      />
      <div class="py-2">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
    </article>`;
    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
  }

