console.log("mensagem");

// Função para abrir a janela pop-up
function addbutton() {
  console.log("ativar botão editar");
  document.getElementById("popup").style.display = "flex";
  // document.getElementById("overlay").style.display = "block";//
}

// Função para fechar a janela pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function openPopup() {
  document.getElementById("popup").style.display = "block"; // Exibe a janela pop-up
  document.getElementById("overlay").style.display = "block"; // Exibe o fundo opaco
}

// Função para fechar a janela pop-up
function hidePopup() {
  document.getElementById("popup").style.display = "none"; // Oculta a janela pop-up
  //document.getElementById("overlay").style.display = "none"; // Oculta o fundo opaco
}

// Função para salvar o nome (apenas um exemplo, pode ser adaptado)
function saveData() {
  var nome = document.getElementById("nomeInput").value;
  alert("Nome salvo: " + nome);
  closePopup(); // Fecha a janela após salvar o nome
}

document.getElementById("card__like").addEventListener("click", function () {
  this.classList.toggle("active"); // Alterna a classe 'active' no botão
});
