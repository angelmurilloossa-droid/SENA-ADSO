# CSSLab — Laboratorio de pseudoclases CSS

Proyecto educativo para Visual Studio Code. Incluye una página web con ejemplos visuales y comentarios en el CSS.

## Archivos

- `index.html`: estructura y ejemplos interactivos.
- `styles.css`: diseño visual y reglas CSS comentadas.
- `script.js`: comportamiento básico del formulario y del diálogo.

## Cómo ejecutarlo

1. Descomprime la carpeta.
2. Abre la carpeta `demo-pseudoclases-css` desde Visual Studio Code.
3. Abre `index.html` en el navegador. También puedes usar la extensión **Live Server**.
4. Prueba los botones, campos, enlaces y elementos desplegables.

## Importante sobre el catálogo

El proyecto demuestra directamente en la página las pseudoclases que pueden observarse en un HTML corriente. También documenta en comentarios las pseudoclases que dependen de contextos especiales: impresión (`@page`), Shadow DOM, WebVTT, transiciones de vista, scroll markers, XR y funciones recientes.

No todas las pseudoclases tienen soporte uniforme en los navegadores. Algunas reglas están dentro de `@supports selector(...)` para que el navegador las aplique solo si reconoce el selector. Otras aparecen comentadas porque solo son válidas dentro de un contexto especial, como `:host()` dentro de Shadow DOM.

## Nota

Las pseudoclases se escriben con `:`. Los pseudoelementos se escriben normalmente con `::`; por ejemplo, `::before` y `::after`. No son lo mismo.
