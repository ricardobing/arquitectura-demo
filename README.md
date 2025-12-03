# ARCHISTUDIO - Sitio Web de Estudio de Arquitectura

Un sitio web profesional y moderno para un estudio de arquitectura, desarrollado con Next.js 14+, TypeScript, TailwindCSS y Framer Motion.

## 🌟 Características

- **100% Responsive**: Diseño mobile-first optimizado para todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion para una experiencia de usuario fluida
- **Diseño Minimalista**: Estética profesional con tonos neutros y tipografía moderna
- **Imágenes de Alta Calidad**: Utilizando Unsplash para fotografía arquitectónica profesional
- **Sin Base de Datos**: Todos los datos están hardcodeados, ideal para demos y prototipos
- **SEO Optimizado**: Metadata configurada para mejor posicionamiento

## 📦 Tecnologías Utilizadas

- **Framework**: Next.js 16.0.6 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Animaciones**: Framer Motion
- **Íconos**: React Icons
- **Imágenes**: Next/Image con Unsplash

## 🚀 Comenzar

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/arquitectura-demo.git
cd arquitectura-demo
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
arquitectura-demo/
├── app/                      # App Router de Next.js
│   ├── page.tsx             # Página principal
│   ├── proyectos/           # Página de proyectos
│   │   ├── page.tsx
│   │   └── [id]/page.tsx   # Detalle de proyecto individual
│   ├── servicios/           # Página de servicios
│   ├── sobre-nosotros/      # Página sobre nosotros
│   ├── contacto/            # Página de contacto
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Estilos globales
├── components/              # Componentes reutilizables
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/                    # Datos estáticos
│   ├── projects.ts
│   └── services.ts
└── public/                  # Archivos estáticos
```

## 🎨 Páginas

### 1. Home (/)
- Hero fullscreen con imagen de fondo
- Sección de proyectos destacados
- Sección de servicios
- Sección "Sobre Nosotros"
- CTA (Call to Action)

### 2. Proyectos (/proyectos)
- Grid de proyectos con filtros por categoría
- Páginas individuales de proyecto con galería

### 3. Servicios (/servicios)
- Lista detallada de servicios ofrecidos
- Sección de proceso de trabajo

### 4. Sobre Nosotros (/sobre-nosotros)
- Historia del estudio
- Estadísticas
- Valores corporativos
- Equipo de trabajo

### 5. Contacto (/contacto)
- Formulario de contacto funcional (frontend)
- Información de contacto
- Mapa/Imagen de ubicación

## 🎯 Características Destacadas

- **Animaciones al Scroll**: Elementos que se animan al entrar en viewport
- **Hover Effects**: Efectos sutiles en tarjetas e imágenes
- **Navegación Responsive**: Menú hamburguesa en mobile
- **Navbar Dinámico**: Cambia de transparente a sólido al hacer scroll
- **Formulario de Contacto**: Con validación y feedback visual
- **Optimización de Imágenes**: Lazy loading y optimización automática con Next/Image

## 🚢 Deploy en Vercel

1. Push del código a GitHub

2. Conectar repositorio en [Vercel](https://vercel.com):
   - Importar proyecto desde GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

3. Tu sitio estará disponible en pocos minutos con URL personalizada

## 🛠 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Paleta de Colores

- **Principal**: Gray-900 (#111827)
- **Secundario**: White (#FFFFFF)
- **Acentos**: Gray-50 a Gray-800
- **Texto**: Gray-600, Gray-900

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es un demo y está disponible para uso libre.

## 🙏 Créditos

- Imágenes: [Unsplash](https://unsplash.com)
- Íconos: [React Icons](https://react-icons.github.io/react-icons/)
- Framework: [Next.js](https://nextjs.org)

---

**¿Necesitás ayuda?** Abrí un issue en GitHub o contactá al desarrollador.
