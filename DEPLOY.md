# Instrucciones para Subir el Proyecto a GitHub

## Opción 1: Crear repositorio desde GitHub.com (Recomendado)

### Paso 1: Crear el repositorio en GitHub
1. Ve a [github.com](https://github.com)
2. Inicia sesión con tu cuenta
3. Click en el botón "+" (arriba derecha) → "New repository"
4. Configura el repositorio:
   - **Repository name**: `arquitectura-demo` (o el nombre que prefieras)
   - **Description**: "Sitio web profesional para estudio de arquitectura - Next.js + TypeScript + TailwindCSS"
   - **Visibility**: Público o Privado (según prefieras)
   - **NO marques**: "Initialize this repository with a README" (ya tenemos uno)
5. Click en "Create repository"

### Paso 2: Conectar tu repositorio local con GitHub

Después de crear el repositorio, GitHub te mostrará instrucciones. Usa estas:

```bash
# En PowerShell, desde C:\tmp\arquitectura-demo
git remote add origin https://github.com/TU-USUARIO/arquitectura-demo.git
git branch -M main
git push -u origin main
```

**Reemplaza `TU-USUARIO`** con tu nombre de usuario de GitHub.

Si te pide autenticación, usa tu **Personal Access Token** (no tu contraseña):
1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Selecciona scopes: `repo` (completo)
4. Copia el token generado
5. Úsalo como contraseña cuando Git te lo pida

---

## Opción 2: Usar GitHub CLI (gh)

Si tenés GitHub CLI instalado:

```bash
# Desde C:\tmp\arquitectura-demo
gh repo create arquitectura-demo --public --source=. --remote=origin --push
```

---

## Verificar que se subió correctamente

1. Ve a `https://github.com/TU-USUARIO/arquitectura-demo`
2. Deberías ver todos los archivos del proyecto
3. El README.md se mostrará en la página principal

---

## Desplegar en Vercel

### Paso 1: Conectar GitHub con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión (puedes usar tu cuenta de GitHub)
3. Click en "Add New..." → "Project"

### Paso 2: Importar tu repositorio
1. Selecciona "Import Git Repository"
2. Busca y selecciona `arquitectura-demo`
3. Click en "Import"

### Paso 3: Configurar y Deploy
1. Vercel detectará automáticamente que es un proyecto Next.js
2. **Framework Preset**: Next.js (auto-detectado)
3. **Build Command**: `npm run build` (auto-configurado)
4. **Output Directory**: `.next` (auto-configurado)
5. No necesitas agregar variables de entorno
6. Click en **"Deploy"**

### Paso 4: Esperar el Deploy
- El proceso toma 2-3 minutos
- Vercel construirá y desplegará tu sitio automáticamente

### Paso 5: ¡Listo!
- Tu sitio estará disponible en una URL tipo: `https://arquitectura-demo-xxxxx.vercel.app`
- Vercel te dará la opción de configurar un dominio personalizado si lo deseas

---

## Actualizaciones Futuras

Cada vez que hagas cambios y los subas a GitHub:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel automáticamente detectará los cambios y redespliegará tu sitio.

---

## Comandos Git Útiles

```bash
# Ver estado actual
git status

# Ver historial de commits
git log --oneline

# Crear una nueva rama
git checkout -b nueva-feature

# Volver a la rama main
git checkout main

# Ver ramas
git branch
```

---

## Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/arquitectura-demo.git
```

### Error de autenticación
- Asegúrate de usar un Personal Access Token, no tu contraseña
- El token debe tener permisos de `repo`

### El sitio no se ve bien en Vercel
- Verifica que `next.config.ts` tenga la configuración de imágenes de Unsplash
- Revisa los logs en Vercel Dashboard para ver errores específicos

---

## Recursos Adicionales

- [GitHub Documentation](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**¡Felicitaciones! Tu sitio estará en línea y accesible para todo el mundo** 🎉
