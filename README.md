# Despacho de Abogados - Gabriel Tomás Gili

## 🚀 Deployment en Vercel

### Pasos para subir a Vercel:

1. **Conectar el repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub

2. **Configuración automática:**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Usará la configuración del `vercel.json` incluido
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Variables de entorno (si necesitas):**
   - En el dashboard de Vercel, ve a Settings > Environment Variables
   - Agrega las variables necesarias

### 📁 Estructura del proyecto:

```
├── index.html          # Página principal
├── package.json        # Dependencias y scripts
├── vercel.json         # Configuración de Vercel
├── vite.config.js      # Configuración de Vite
├── src/
│   ├── main.js         # Punto de entrada principal
│   ├── style.css       # Estilos globales
│   └── components/     # Componentes modulares
└── public/
    ├── contacto.html   # Formulario de contacto
    └── Legalidades/    # Páginas legales
```

### 🔧 Características técnicas:

- **Framework:** Vite + Vanilla JavaScript
- **Módulos ES6:** Arquitectura modular
- **Formulario:** Integración con Google Sheets + EmailJS
- **Responsive:** Diseño adaptable
- **SEO:** Optimizado para buscadores

### 📱 URLs importantes:

- `/` - Página principal
- `/public/contacto.html` - Formulario de contacto
- `/public/Legalidades/` - Páginas legales

El sitio estará disponible en: `https://tu-proyecto.vercel.app`