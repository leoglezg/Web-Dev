# Web-Dev

Demos de páginas web. Cada demo vive en `demos/<negocio>/`.

## Herramientas para Claude Code

- **Skills** en `.claude/skills/`: `react-bits`, `gsap`, `ui-ux-pro-max` (+ `banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling`).
- **MCP 21st.dev** en `.mcp.json`. La clave no está en el repo: el entorno de Claude la inyecta en el encabezado `x-api-key`. Para usarlo en local, reemplaza `proxy-injected` por tu clave sin hacer commit.
- **Pixabay**: la clave se lee de la variable de entorno `PIXABAY_API_KEY` (`https://pixabay.com/api/?key=$PIXABAY_API_KEY&q=...`). No la escribas en el código.
