//css2908

import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById('carrinho').classList.add("right-[0px]");
    document.getElementById('carrinho').classList.remove("right-[-360px]");

}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[0px]");
    document.getElementById('carrinho').classList.add("right-[-360px]");

}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);

}

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img 
      src="/assets/img/${produto.imagem}" 
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">  
        ${produto.nome}
      </p>  
      <p class="text-slate-400 text-xs">Tamanho M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2">
      <button>-</button>
        <p>2</p>
      <button>+</button>
    </div>
  </article>`
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}


