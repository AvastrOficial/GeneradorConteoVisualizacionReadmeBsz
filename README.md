# Generador Conteo de Visualizacion para Readme - Bsz
![Vistas Repositorio](https://visitor-badge.laobi.icu/badge?page_id=BSZRepositorioVisualizacion&left_text=Vistas%20Repositorio&left_color=%23969696&right_color=%23ff0000)

<br></br>
Web : https://appbsz.crearforo.net/h153-generador-contador-de-visualizacion-bsz	

---

Este proyecto es una pequeña aplicación web que permite generar un código Markdown para mostrar un contador personalizado de visitas o cualquier etiqueta en GitHub, utilizando el servicio externo [visitor-badge.laobi.icu](https://visitor-badge.laobi.icu).

---

## ¿Qué hace?

El usuario puede ingresar:

- **Nombre del contador** (etiqueta que aparecerá a la izquierda del contador).
- **Color izquierdo** y **color derecho** para el estilo visual del contador.
- **Nombre de usuario de GitHub** (o cualquier identificador).

La aplicación genera un código Markdown que incluye una URL con los parámetros personalizados para mostrar el contador en cualquier archivo Markdown, README o página compatible.

Además, permite copiar fácilmente el código generado al portapapeles, mostrando una notificación visual cuando la copia es exitosa.

---

## Uso

1. Abrir el archivo HTML en un navegador moderno.
2. Rellenar los campos:
   - **Nombre del contador**: texto que describe el contador (ejemplo: "Visualizaciones").
   - **Color izquierdo** y **Color derecho**: elegir colores para el diseño.
   - **Usuario GitHub**: el identificador que se usará para contar visitas.
3. Hacer clic en **Generar Código**.
4. El código Markdown aparecerá en la sección de resultados.
5. Aparecerá un botón para **Copiar código** que copiará el Markdown al portapapeles.
6. Pegar el código en tu archivo README.md o documento compatible con Markdown.

---

## Detalles técnicos

- El contador usa la URL base:  
  `https://visitor-badge.laobi.icu/badge?page_id=USUARIO&left_text=ETIQUETA&left_color=COLOR1&right_color=COLOR2`

- El campo usuario GitHub se procesa para:
  - Reemplazar espacios por guiones bajos.
  - Si el usuario es un número, se le agrega prefijo `id_` para evitar conflictos.

- Los colores se codifican para URL.

- El código generado es una imagen Markdown con texto alternativo igual a la etiqueta.

---

## Tecnologías usadas

- HTML5 y CSS3 para la estructura y diseño.
- Font Awesome para los iconos.
- JavaScript para la lógica:
  - Escuchar eventos de cambio en los selectores de color para mostrar su valor hexadecimal.
  - Generar el código Markdown.
  - Copiar el código generado al portapapeles usando la API Clipboard o un fallback con `document.execCommand`.
  - Mostrar notificación animada cuando se copia el texto.

---

## Estilo

- Diseño limpio, minimalista y responsivo.
- Uso de colores verdes suaves y tonos naturales.
- Interactividad con animaciones suaves en botones e iconos.
