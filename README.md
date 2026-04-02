# 🚀 Button Hub

Una aplicación web minimalista que muestra una galería interactiva de aplicaciones favoritas como tarjetas de acceso rápido. Incluye soporte para tema oscuro/claro y está completamente construida con React, TypeScript y Vite.

## ✨ Características

- **Interfaz limpia y moderna**: Diseño minimalista con Tailwind CSS
- **Modo oscuro/claro**: Toggle de tema con persistencia en localStorage
- **Responsive**: Se adapta automáticamente a cualquier tamaño de pantalla (grid 2-3 columnas)
- **HMR (Hot Module Replacement)**: Desarrollo rápido con recarga instantánea
- **TypeScript**: Type-safe para prevenir errores
- **ESLint configurado**: Mantiene la calidad del código

## 🛠️ Tech Stack

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS** - Utilidades CSS
- **PostCSS** - Procesamiento de CSS

## 📦 Instalación

### Requisitos previos
- Node.js 16+ 
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/button-hub.git
cd button-hub

# Instalar dependencias
npm install
```

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para producción
```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

### Preview del build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── ButtonCard/        # Tarjeta individual de aplicación
│   └── ThemeToggle/       # Botón de cambio de tema
├── data/
│   └── apps.ts           # Lista de aplicaciones
├── hooks/
│   └── useTheme.ts       # Hook custom para gestionar temas
├── styles/
│   ├── global.css        # Estilos globales
│   ├── themes.css        # Variables de tema
│   └── variables.css     # Variables CSS personalizadas
├── utils/
│   └── storage.ts        # Utilidades de localStorage
├── App.tsx               # Componente principal
└── main.tsx              # Punto de entrada
```

## 🎨 Personalización

### Agregar nuevas aplicaciones
Edita `src/data/apps.ts` y agrega objetos con la estructura:
```typescript
{
  id: number
  name: string
  icon: string
  url: string
}
```

### Cambiar colores del tema
Modifica las variables CSS en `src/styles/variables.css` y `src/styles/themes.css`.

## 📜 Licencia

[MIT](LICENSE)

## 👤 Autor

Created with ❤️
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
