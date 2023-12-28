const overlay = document.getElementById('overlay');
const mapIframe = document.getElementById('map-iframe');

overlay.addEventListener('mousedown', blockMouseEvent);
overlay.addEventListener('mousemove', blockMouseEvent);
overlay.addEventListener('mouseup', blockMouseEvent);

function blockMouseEvent(event) {
  event.stopPropagation();
}

// Ajusta a posição e tamanho do overlay para cobrir o iframe
function adjustOverlay() {
  const iframeRect = mapIframe.getBoundingClientRect();
  overlay.style.top = iframeRect.top + 'px';
  overlay.style.left = iframeRect.left + 'px';
  overlay.style.width = iframeRect.width + 'px';
  overlay.style.height = iframeRect.height + 'px';
}

// Ajusta o overlay quando o iframe é carregado
mapIframe.onload = function() {
  adjustOverlay();
};

// Ajusta o overlay quando a janela é redimensionada
window.addEventListener('resize', adjustOverlay);
