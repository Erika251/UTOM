# UTOM · El futuro lo construyes tú

PWA responsiva para aspirantes a Ingeniería en Tecnologías de la Información e Innovación Digital de la Universidad Tecnológica del Oriente de Michoacán.

## Ejecutar localmente con XAMPP

1. Coloca esta carpeta en `C:\xampp\htdocs\UTOM`.
2. Inicia Apache desde el panel de XAMPP.
3. Abre `http://localhost/UTOM/` en Chrome o Edge.

No requiere Node.js, base de datos ni dependencias externas. El archivo `.htaccess` indica a Apache el tipo MIME correcto para el manifiesto.

## Instalar desde el navegador

Pulsa **Instalar app**. En navegadores Chromium que habiliten `beforeinstallprompt`, el botón abre el diálogo nativo. También puede instalarse desde el menú del navegador con **Instalar UTOM** o **Agregar a pantalla de inicio**. La disponibilidad del cuadro depende del navegador y del dispositivo. Tras la primera visita, el service worker prepara el acceso sin conexión.

## Archivos principales

- `index.html`: contenido y secciones.
- `styles.css`: diseño adaptable a móvil, tableta y escritorio.
- `app.js`: navegación, instalación y estado de conectividad.
- `manifest.webmanifest`: nombre, modo de ventana, URL de inicio e iconos PWA.
- `sw.js`: caché local y vista sin conexión.
- `.htaccess`: MIME del manifiesto para Apache/XAMPP.
- `assets/`: logotipo e iconos de instalación.

El contenido curricular resume el mapa compartido, vigente a partir de septiembre de 2024. Las materias y fechas pueden cambiar; confirma la información vigente con UTOM. La página enlaza el sitio institucional y el teléfono que aparecen en el material compartido.
