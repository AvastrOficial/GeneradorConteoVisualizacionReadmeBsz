  const leftColorInput = document.getElementById('leftColor');
  const rightColorInput = document.getElementById('rightColor');
  const leftColorText = document.getElementById('leftColorText');
  const rightColorText = document.getElementById('rightColorText');
  const resultado = document.getElementById('resultado');
  const copyBtn = document.getElementById('copyBtn');
  const copyNotification = document.getElementById('copyNotification');

  leftColorInput.addEventListener('input', () => {
    leftColorText.textContent = leftColorInput.value;
  });

  rightColorInput.addEventListener('input', () => {
    rightColorText.textContent = rightColorInput.value;
  });

  function generarMarkdown() {
    const label = document.getElementById("label")?.value || "Visitas";
    const rawUsername = document.getElementById("username").value.trim().replace(/\s+/g, "_") || "page.id";
    const username = /^\d+$/.test(rawUsername) ? `id_${rawUsername}` : rawUsername;

    // Agrega el '#' y lo codifica para URL
    const leftColor = encodeURIComponent(leftColorInput.value);
    const rightColor = encodeURIComponent(rightColorInput.value);

    const encodedLabel = encodeURIComponent(label);

    const markdown = `![${label}](https://visitor-badge.laobi.icu/badge?page_id=${username}&left_text=${encodedLabel}&left_color=${leftColor}&right_color=${rightColor})`;

    resultado.textContent = markdown;
    copyBtn.style.display = 'inline-flex';
    copyNotification.style.display = 'none';
  }




   function copiarAlPortapapeles() {
    const codigo = document.getElementById('resultado').innerText.trim();
    if (!codigo) {
      alert('No hay código para copiar.');
      return;
    }

    // Usa el API Clipboard si está disponible
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(codigo).then(() => {
        mostrarNotificacion();
      }).catch(err => {
        console.error('Error copiando al portapapeles:', err);
        fallbackCopyTextToClipboard(codigo);
      });
    } else {
      // Fallback para navegadores antiguos
      fallbackCopyTextToClipboard(codigo);
    }
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // Evitar scroll
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) mostrarNotificacion();
      else alert('No se pudo copiar el texto.');
    } catch (err) {
      alert('No se pudo copiar el texto.');
    }

    document.body.removeChild(textArea);
  }

 function mostrarNotificacion() {
  const notification = document.getElementById('copyNotification');
  notification.style.display = 'block';      // mostrar para que el fade funcione
  notification.classList.add('show');

  // Después de 2 segundos, oculta la notificación
  setTimeout(() => {
    notification.classList.remove('show');

    // Después de la transición de opacidad, ocultamos completamente el div para evitar que ocupe espacio o capture eventos
    setTimeout(() => {
      notification.style.display = 'none';
    }, 300); // debe coincidir con la duración del transition en CSS
  }, 2000);
}
