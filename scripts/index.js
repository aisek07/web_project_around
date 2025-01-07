console.log("mensagem");

// Função para abrir a janela pop-up
function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
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
function closePopup() {
  document.getElementById("popup").style.display = "none"; // Oculta a janela pop-up
  document.getElementById("overlay").style.display = "none"; // Oculta o fundo opaco
}

// Função para salvar o nome (apenas um exemplo, pode ser adaptado)
function saveName() {
  var nome = document.getElementById("nomeInput").value;
  alert("Nome salvo: " + nome);
  closePopup(); // Fecha a janela após salvar o nome
}
