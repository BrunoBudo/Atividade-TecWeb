import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

let itens = [];

const form = document.getElementById("form-cadastro");
const nomeInput = document.getElementById("nome");
const descricaoInput = document.getElementById("descricao");
const lista = document.getElementById("lista-itens");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = nomeInput.value.trim();
  const descricao = descricaoInput.value.trim();

  if (nome === "" || descricao === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const item = { id: Date.now(), nome, descricao };
  itens.push(item);
  atualizarLista();

  nomeInput.value = "";
  descricaoInput.value = "";
});

function atualizarLista() {
  lista.innerHTML = "";

  itens.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `
      <div>
        <strong>${item.nome}</strong><br/>
        <small>${item.descricao}</small>
      </div>
      <button onclick="removerItem(${item.id})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

window.removerItem = (id) => {
  itens = itens.filter((item) => item.id !== id);
  atualizarLista();
};

window.mostrarSecao = (secao) => {
  document.getElementById("cadastro").style.display = secao === "cadastro" ? "block" : "none";
  document.getElementById("listagem").style.display = secao === "listagem" ? "block" : "none";
};