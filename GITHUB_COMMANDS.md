# 🚀 COMANDOS PARA SUBIR A GITHUB

Copia y pega estos comandos en PowerShell para subir tu proyecto a GitHub.

---

## PASO 1: Crear Repositorio en GitHub (Manual)

1. Ve a: https://github.com/new
2. Configura:
   - **Repository name**: `arquitectura-demo`
   - **Description**: "Sitio web profesional para estudio de arquitectura"
   - **Public** o **Private** (tu elección)
   - ⚠️ **NO marques** "Initialize with README"
3. Click en "Create repository"

---

## PASO 2: Conectar y Subir (Copia estos comandos)

### Opción A: Si el repositorio es PÚBLICO

```powershell
# Asegúrate de estar en el directorio correcto
Set-Location C:\tmp\arquitectura-demo

# Conectar con tu repositorio (REEMPLAZA "TU-USUARIO" con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/arquitectura-demo.git

# Renombrar rama a main
git branch -M main

# Subir todo a GitHub
git push -u origin main
```

### Opción B: Si el repositorio es PRIVADO o necesitas autenticación

Cuando Git te pida credenciales:
- **Username**: Tu usuario de GitHub
- **Password**: NO uses tu contraseña, usa un **Personal Access Token**

#### Crear un Personal Access Token:
1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. Configura:
   - **Note**: "arquitectura-demo deployment"
   - **Expiration**: 30 days (o lo que prefieras)
   - **Scopes**: Marca solo `repo` (completo)
4. Click en "Generate token"
5. **COPIA EL TOKEN** (solo se muestra una vez)
6. Úsalo como "password" cuando Git te lo pida

---

## PASO 3: Verificar que se subió

```powershell
# Ver el repositorio remoto configurado
git remote -v

# Deberías ver algo como:
# origin  https://github.com/TU-USUARIO/arquitectura-demo.git (fetch)
# origin  https://github.com/TU-USUARIO/arquitectura-demo.git (push)
```

Luego ve a: `https://github.com/TU-USUARIO/arquitectura-demo`

Deberías ver todos tus archivos allí. ✅

---

## PASO 4: Deploy en Vercel (Automático)

### 4.1 Conectar con Vercel

1. Ve a: https://vercel.com/login
2. Inicia sesión con GitHub (recomendado)
3. Click en "Add New..." → "Project"

### 4.2 Importar Proyecto

1. Busca y selecciona `arquitectura-demo`
2. Click en "Import"

### 4.3 Configurar (Todo automático)

Vercel detectará automáticamente:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

**No necesitas cambiar nada.**

### 4.4 Deploy

1. Click en "Deploy"
2. Espera 2-3 minutos
3. ¡Listo! Tu sitio estará en línea

Vercel te dará una URL tipo:
`https://arquitectura-demo-xxxxx.vercel.app`

---

## 🎯 Comandos Útiles para el Futuro

```powershell
# Ver estado de Git
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios a GitHub
git push

# Ver historial
git log --oneline

# Ver ramas
git branch
```

---

## 🔧 Solución de Problemas

### Error: "fatal: remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/arquitectura-demo.git
```

### Error: "Authentication failed"
- Asegúrate de usar un **Personal Access Token**, NO tu contraseña
- Verifica que el token tenga permisos de `repo`

### Error: "Updates were rejected"
```powershell
git pull origin main --rebase
git push origin main
```

---

## 📝 Actualizaciones Futuras

Cada vez que hagas cambios:

```powershell
# 1. Agregar archivos modificados
git add .

# 2. Hacer commit con descripción
git commit -m "Actualización: [describe el cambio]"

# 3. Subir a GitHub
git push

# Vercel automáticamente redesplegaría tu sitio
```

---

## 🎊 ¡Eso es Todo!

Una vez que hagas `git push`, tu código estará en GitHub.
Una vez que lo importes en Vercel, tu sitio estará en línea.

**Todo listo para producción.** 🚀

---

## 📞 Enlaces Importantes

- **GitHub**: https://github.com
- **Vercel**: https://vercel.com
- **Tokens**: https://github.com/settings/tokens
- **Tu Repo**: https://github.com/TU-USUARIO/arquitectura-demo (reemplaza TU-USUARIO)

---

**¡Éxito con tu proyecto!** 🎉
