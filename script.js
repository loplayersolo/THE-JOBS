// Cria o botão e insere no topo da página
function createHomeButton() {
  const homeWrapper = document.createElement("div");
  homeWrapper.id = "home-button-wrapper";

  const homeLink = document.createElement("a");
  homeLink.href = "index.html"; // Altere se sua página principal tiver outro nome
  homeLink.className = "home-button";
  homeLink.textContent = "🏠 Home";

  homeWrapper.appendChild(homeLink);
  document.body.appendChild(homeWrapper);
}

window.addEventListener("DOMContentLoaded", createHomeButton);
