# DevForge — Landing Page para Empresa de TI

Plantilla de landing page multi-página orientada a empresas de desarrollo de software, consultorías TI y estudios digitales. Construida con HTML5, Tailwind CSS (CDN) y JavaScript vanilla, sin dependencias de build.

## Demo

Abrir `index.html` en el navegador. No requiere servidor ni proceso de compilación.

## Características

- **Multi-página**: Inicio, Servicios, Nosotros, Precios, Horarios, Contacto, Términos y Privacidad.
- **Diseño responsive** con Tailwind CSS y componentes personalizados en `assets/css/styles.css`.
- **Datos centralizados** en `assets/js/data.js` para modificar la información de la empresa (nombre, contacto, redes, planes, horarios, etc.) desde un único archivo.
- **Sin build step**: se ejecuta directamente abriendo los archivos HTML.
- **Animaciones y micro-interacciones** con CSS y JS vanilla.
- **SEO básico**: meta tags, Open Graph y estructura semántica.
- **Formulario de contacto** con validación del lado cliente.
- **SVG inline** y assets vectoriales livianos en `assets/img/`.

## Estructura del proyecto

```
empresa-ti-01/
├── index.html              # Página de inicio
├── servicios.html          # Catálogo de servicios
├── nosotros.html           # Sobre la empresa / equipo
├── precios.html            # Planes y precios
├── horario-clases.html     # Horarios disponibles
├── contacto.html           # Formulario de contacto
├── terminos.html           # Términos y condiciones
├── privacidad.html         # Política de privacidad
└── assets/
    ├── css/
    │   └── styles.css      # Estilos personalizados (complementa a Tailwind)
    ├── js/
    │   ├── data.js         # ⭐ Datos centralizados de la empresa
    │   ├── main.js         # Lógica global (navbar, loader, footer)
    │   ├── home.js         # Componentes del index
    │   ├── servicios.js    # Lógica de la página de servicios
    │   ├── nosotros.js     # Lógica de la página nosotros
    │   ├── precios.js      # Renderizado de planes
    │   ├── horario.js      # Renderizado de horarios
    │   └── contacto.js     # Validación y manejo del formulario
    └── img/                # Recursos gráficos (SVG, ilustraciones)
```

## Personalización rápida

La mayoría del contenido se edita desde un solo lugar:

1. Abre `assets/js/data.js`.
2. Modifica el objeto `APP_DATA` con la información de tu empresa:
   - `empresa.nombre`, `empresa.tagline`, `empresa.descripcionCorta`
   - Datos de contacto: `email`, `telefono`, `whatsapp`, `direccion`
   - `empresa.redes` (Facebook, Twitter/X, LinkedIn, Instagram, GitHub, YouTube)
   - `horarios`, `stats`, `servicios`, `planes`, `equipo`, `testimonios`, `proyectos`

Los cambios se reflejan automáticamente en todas las páginas.

### Cambiar colores y tipografías

Los colores de marca y fuentes se configuran en el bloque `tailwind.config` dentro de cada archivo HTML (o creando un archivo compartido). Por defecto se usan las familias **Inter** (texto) y **Poppins** (títulos), y los tonos `dark-950` / `dark-900` para fondos oscuros.

## Páginas incluidas

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `index.html` | Hero, propuesta de valor, servicios destacados, stats, proyectos y CTA. |
| Servicios | `servicios.html` | Listado detallado de servicios con descripciones. |
| Nosotros | `nosotros.html` | Historia, equipo y valores de la empresa. |
| Precios | `precios.html` | Planes con comparación de características. |
| Horarios | `horario-clases.html` | Disponibilidad semanal. |
| Contacto | `contacto.html` | Formulario e información de contacto. |
| Términos | `terminos.html` | Términos y condiciones de uso. |
| Privacidad | `privacidad.html` | Política de tratamiento de datos. |

## Uso local

No hay proceso de build. Puedes:

- **Opción A**: Doble clic en `index.html` para abrirlo en el navegador.
- **Opción B (recomendada)**: Servir la carpeta con un servidor estático para evitar restricciones de `file://`:

  ```bash
  # Con Python 3
  python -m http.server 8000

  # Con Node.js (npx)
  npx serve .
  ```

  Luego visita `http://localhost:8000`.

## Despliegue

La plantilla es 100% estática y puede desplegarse en cualquier hosting de archivos estáticos:

- **Netlify**: arrastra la carpeta al panel de Netlify o conecta el repositorio.
- **Vercel**: `vercel --prod` desde la raíz del proyecto.
- **GitHub Pages**: sube el contenido a la rama `gh-pages`.
- **Hosting tradicional** (cPanel, Hostinger, etc.): sube todos los archivos vía FTP al directorio público.

## Compatibilidad

- Navegadores modernos (Chrome, Firefox, Edge, Safari — últimas 2 versiones).
- Diseño responsive: mobile, tablet y desktop.
- No soporta IE11.

## Créditos y recursos

- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com) (vía CDN).
- **Google Fonts**: Inter y Poppins.
- Iconos: SVGs propios incluidos en `assets/img/`.

## Licencia

Plantilla de uso libre para proyectos comerciales y personales. Se agradece la atribución a DevForge como plantilla original.

## Configuración para Chile

Los precios de ejemplo se expresan en pesos chilenos (CLP), con separador de miles chileno. Los planes son $149.900, $349.900 y $799.900 al mes; la facturación anual aplica 20% de descuento al total de 12 meses. Son valores comerciales de muestra, no una conversión de divisas.

El teléfono +56, los correos .cl y la ubicación en Providencia, Santiago son datos de demostración: reemplázalos por los reales antes de publicar. El mapa muestra el sector de referencia, no una oficina específica. Los horarios usan America/Santiago. Revisa y adapta los textos legales a tu empresa antes de publicar.
