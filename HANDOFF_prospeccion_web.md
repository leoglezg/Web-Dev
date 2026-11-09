# Traspaso de conocimiento — Prospección y demos web (Leonardo Gonzalez)

Actualizado: 9 nov 2026. Responde siempre en español.

## 1. Objetivo y reglas fijas
- Vender páginas web a negocios locales (Zapopan primero; luego Guadalajara, Tlaquepaque, Tonalá, Tlajomulco) a **5,000 MXN**, con opción de 50% al iniciar y 50% al entregar, por transferencia. Sin paquetes ni mensualidades.
- Giros: dentistas/consultorios, talleres mecánicos, estéticas y barberías.
- **No generar nada antes de la 1:00 pm Guadalajara** (`TZ=America/Mexico_City date`).
- Honestidad: nada de cifras, testimonios, premios ni urgencias inventadas. Reseñas en demos siempre marcadas "de ejemplo".
- Todo mensaje termina con: "Si no le interesa, responda BAJA y no le vuelvo a escribir." Bajas = "No contactar" para siempre; quejas o amenazas legales: no responder y avisar a Leonardo.
- WhatsApp nunca se envía solo: se deja un enlace wa.me listo. Los correos sí se envían desde leoglezgg@gmail.com con tope diario (semana 1 desde el 5 nov: 10; semana 2: 20; después 30). Más de 2 rebotes o 1 queja de spam: parar ese día y avisar.
- Primer mensaje ≤75 palabras, seguimientos ≤50; primera línea con algo real del negocio; asunto "Página para [Negocio]". Palabras prohibidas: "potenciar", "impulsar su presencia", "siguiente nivel", "soluciones integrales", "no se pierda", "espero que este correo le encuentre bien", emojis y signos múltiples.
- Seguimientos a los 3–4 días, máximo 2; después "Cerrado sin respuesta".

## 2. Recursos
- Repo: `leoglezg/Web-Dev`, rama **main**, GitHub Pages en la raíz. Demos en `demos/<slug>/` → `https://leoglezg.github.io/Web-Dev/demos/<slug>/`. Push directo a main **solo dentro de demos/**. Commits como `Leonardo Gonzalez <leoglezgg@gmail.com>`. Verificar el despliegue de Pages con las acciones de GitHub (tarda 1–5 min).
- Hoja principal (operativa): **"Prospección Web - Empresas a contactar"**, ID `12nnDNcA5EVfrP301TNAYIZxBWFCk1eyEC8pNDjh4TDg`, pestaña **Empresas**. Columnas A–S: Estado · Negocio · Giro · Colonia · Teléfono · Tipo de teléfono · Correo · Puntuación · Canal · Variante · Demo rediseñada · Ver demo · Abrir WhatsApp · Fecha de contacto · Contactada por · Respuesta · Resultado · Monto cobrado (MXN) · Notas. Tiene listas desplegables (Estado, Respuesta, Resultado) y colores por estado.
- Registro original (vacío, solo encabezados): "Prospección Web - Registro" ID `1oZp91xN-tPZmSkWmwrQOcjIV5MccOxRoMtdeZOGuCww`.
- Conectores: Gmail, Google Drive, **Google Sheets** (edita celdas: `update_values`, `update_spreadsheet`; en `fields` usa rutas separadas por coma, no paréntesis), GitHub MCP, Pixabay vía `PIXABAY_API_KEY` (variable de entorno), 21st.dev MCP (clave inyectada por el proxy).
- No existe en Drive un "documento de lineamientos de diseño"; la sección 4 de este archivo hace ese papel.

## 3. Estado al 9 nov 2026
- **11 contactadas** (en la hoja): Aguirre Automotriz, Centro Odontológico Puerta de Hierro (COPH), Chakon Barbería, Dentista Lomas de Zapopan, Erika Salón y Microblading, JMV Mecánica Automotriz, Barbería "MA", Barbería Locotes, Diesel Mecánica, Maty Guillen Estética, Violette Salón.
- **Correos enviados el 5 nov:** Aguirre (13:12, variante B), Erika, Dentista Lomas y COPH (20:37). Los primeros seguimientos tocaban el 8–9 nov. Las otras 7 contactadas dicen "Leonardo (anotar canal)".
- **26 por contactar**, con enlaces wa.me listos (los de número fijo dicen "Llamada (fijo)").
- Sin respuestas, bajas ni ventas registradas hasta el 6 nov. Revisar Gmail al empezar.
- Variantes de mensaje vigentes: A (directa: "Soy Leonardo, de Zapopan. Vi [negocio] en [colonia] y le preparé una página…") y B (problema + pregunta: "Busqué [giro] en [colonia] y vi que [negocio] solo aparece en directorios…" — decir "Facebook y directorios" si tiene Facebook). Reparto por muestreo de Thompson. Propuesta pendiente: variante C sin precio (no aprobada).
- Hay **otra sesión editando las demos en main** (commits del 8–9 nov: librerías en `demos/lib3d/vendor`, portada 3D en computadora con texto arriba y modelo abajo, pie con nombre corto, y demos nuevas como urban-barber-tesistan, smile-park-dental, karen-roman-nails, oax-diesel-taller…). **Nunca reemplaces carpetas completas: parte siempre de lo que hay en main y cambia solo lo necesario.**

## 4. Lineamientos de diseño vigentes (versión completa)
### Niveles de demo
1. **Básica:** plantilla simple (pocas secciones).
2. **Animada:** plantilla por giro con Lenis + GSAP, ilustración SVG que se dibuja con el scroll, galería horizontal, etc.
3. **Completa (la actual de las 11 contactadas):** "bloques de color + 3D", inspirada en Fine Acts (grabación) + Apple Mac mini y Cybertruck:
   - **Escena 3D fija** (pin +=420%): kicker, frase pequeña que **rota** cada 2.6 s mientras no hay scroll, palabra gigante (Inter 800). Objeto 3D sube y se acomoda bajo la palabra; luego gira 360° mientras entran capítulos **.01/.02/.03** con desenfoque, columna de datos verificados y barra de progreso de 3 tramos.
   - En dentistas y estéticas la última letra empieza como **destello ✦** que se convierte en letra, con destellos flotando. **Talleres y barberías: sin estrellas** (palabra completa).
   - **Fondo de la escena: 3 colores vivos y distintos que cambian** (frase rotativa y capítulos), **no tintes del mismo color**. Tríos aprobados: Aguirre naranja·cian·acero; JMV amarillo·cian·acero; Diesel naranja·amarillo·acero (en talleres el color de marca NO va en el fondo de la escena porque el auto lo usa; va en el bloque de la cita); Chakon terracota·crema·azul; Locotes verde·crema·terracota; MA azul·crema·rojo; COPH azul·menta·amarillo suave; Maty rosa·durazno·lila; Violette lila·rosa·durazno; Dentista Lomas azul cielo·rosa·menta. Texto negro con contraste ≥7:1.
   - **Bloques**: Servicios (oscuro del giro, lista activa con ● e imagen que cambia, pin), Cita (número gigante 01→02→03 que sube; título "Tu revisión" talleres, "Tu hora" barberías, "Tu cita" resto), Reseñas (gris, carrusel 01 02 03 con marcos de color, aviso "de ejemplo"), Visítanos (filas con líneas finas + mapa + botones), Pie (nombre gigante cuyas letras se dispersan con el scroll + frase del giro). Encabezado que toma el color de la sección; logotipo con 2 letras giradas.
   - Erika conserva su página propia (ceja SVG pelo a pelo) con portada 3D de pluma de microblading; sus capítulos 3D son servicios.
### Objetos 3D por giro (en `demos/lib3d/`, compartidos)
- Dentista: diente (`diente.bin`). Taller: auto con carrocería del color de marca (`auto-*.bin`). Barbería: máquina para cortar pelo con anillo del color de marca (`maquina-*.bin`). Estética: labial con barra del color de marca (`labial-*.bin`). Erika: pluma de microblading (`pluma-*.bin`).
- Se rechazaron: navaja y disco de freno con caliper.
### Reglas de rendimiento (obligatorias; meta: animaciones listas <0.7 s con CPU 4x)
- Mallas **pregeneradas** (SDF → marching cubes → simplificadas con meshoptimizer; Int16 + Uint16, 7–60 KB por pieza). Nunca calcular la malla en el navegador.
- Three.js **recortado** con esbuild (`three-lite.js`, ~122 KB gzip) y motor compartido `scene.js` en `demos/lib3d/`; GSAP/Lenis ahora también locales en `demos/lib3d/vendor/` (cambio de la otra sesión).
- Imagen fija del objeto (`img/<modelo>-3d.webp`) visible desde el inicio, siguiendo el scroll; el 3D se importa tras `load` + `requestIdleCallback` y la reemplaza con fundido. pixelRatio ≤1.5 en celular.
- ScrollTrigger con `refreshPriority` + `ST.sort()` para que los pins no se encimen.
### Fotos y accesibilidad
- Pixabay: descargar (nunca enlazar), WebP calidad 74 en 720 y 1280 con srcset, sin caras identificables ni logos (recortar si aparecen). Si responde 429, reintentar con pausas.
- Contraste verificado por código, botones ≥44 px, sin desborde horizontal (`minmax(0,…)`, `overflow-x:clip`), `noindex` en demos.
- Botón principal: celular → WhatsApp con mensaje prellenado; fijo → "Llamar" (Aguirre).

## 5. Pruebas antes de publicar
- Playwright (Chromium preinstalado, `--use-gl=angle --use-angle=swiftshader`): escritorio 1440×900 y celular 390×844; sin errores de página, desborde 0; rendimiento con `Emulation.setCPUThrottlingRate` 4.
- Las capturas de celular a media escena pueden salir vacías por el desfase del scroll suave: esperar 2–2.5 s.
- github.io, unpkg y jsDelivr no son accesibles desde el sandbox: servir localmente (`python3 -m http.server`) y, si hace falta, interceptar CDNs con paquetes npm locales.

## 6. Trampas conocidas
- Recargar la vista previa cambiando solo el `#` no recarga la página: agregar `?algo`.
- Pin dentro de flex: la columna del número gigante necesita `align-items:flex-start` o el `yPercent` se calcula mal.
- `rm -rf` con rutas relativas o globs es bloqueado por seguridad: usar rutas absolutas o `cp -rT`.
- Ejecutar instaladores de terceros con `npx` fue bloqueado; instalar con `npm install` en el scratchpad sí funcionó.
- El conector de Drive no edita celdas; usar el de Google Sheets.
- **Antes de publicar, revisar `git log` de origin/main**: si hay commits nuevos en las mismas demos, aplicar solo diferencias.

## 7. Herramientas
El paquete `herramientas_demos.tar.gz` (entregado junto con este archivo) contiene los scripts de esta sesión: constructores (`build2.py` animada, `build4.py` 3D, `build6.py` Dentista v3, `build7.py` v3 por empresa), datos (`negocios.py`, `prospectos.py`), modelos 3D (`models.mjs`, `gen2.mjs`, `cfgs.json`, `scene.js`, `preview.html`, `posters.js`) y pruebas (`t4.js`, `t5.js`, `perf.js`). **Están desactualizados respecto a main** (no incluyen `lib3d/vendor` ni el ajuste de portada en computadora de la otra sesión): úsalos como referencia o para piezas nuevas, no para regenerar páginas existentes.
