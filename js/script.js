// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemeto = document.getElementById(parametro);
  if (elemeto) {
    elemeto.checked = true;
  }
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");

  if (resposta.classList.contains("ativo")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// GALERIA DE BICICLETA
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)");

  if (media.matches) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// SIMPLE ANIME
window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll("[data-anime]")), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute("data-anime"));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add("anime");
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? "visible" === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener("visibilitychange", this.handleVisibility);
  }
};

new SimpleAnime();
