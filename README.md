# 🎯 Suscribia - Gestor de Suscripciones

<div align="center">

![Suscribia Logo ](https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-5d38-622f-a069-670af07045e2/raw?se=2025-06-09T05%3A07%3A30Z&sp=r&sv=2024-08-04&sr=b&scid=d3936a1e-2f97-5ed8-a688-7ae052238171&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-09T00%3A01%3A53Z&ske=2025-06-10T00%3A01%3A53Z&sks=b&skv=2024-08-04&sig=YyRQ25BLndH/Yox6D4BzcCTlpXEVlepM3nLG3We5Eo8%3D)

Una aplicación web moderna para gestionar todas tus suscripciones digitales en un solo lugar.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[Demo en Vivo](https://suscribia-subscriptions.netlify.app) • [Documentación](#-documentación) • [Instalación](#-instalación)

</div>

---

## 📝 Descripción

Suscribia es una aplicación web completa diseñada para ayudarte a gestionar todas tus suscripciones digitales de manera eficiente. Desarrollada como parte de una prueba técnica, esta aplicación demuestra competencias sólidas en desarrollo front-end moderno.

### ✨ Características Principales

- 🔐 **Autenticación Completa**: Sistema de login y registro seguro
- 📊 **Dashboard Inteligente**: Estadísticas en tiempo real de tus gastos
- 🔍 **Búsqueda Avanzada**: Filtrado por nombre y categoría
- 📱 **Diseño Responsive**: Funciona perfectamente en todos los dispositivos
- ⚡ **Tiempo Real**: Actualizaciones instantáneas sin recargas
- 🎨 **UI Moderna**: Interfaz elegante con animaciones suaves
- 💾 **Persistencia**: Datos guardados automáticamente

---

## 🚀 Demo en Vivo

### 🌐 **URL:** []()

### 🔑 **Credenciales de Prueba:**
```
Email: admin@suscribia.com
Contraseña: admin123
```

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **Vite 6.3.5** - Herramienta de construcción rápida
- **React Router DOM** - Navegación entre páginas
- **CSS3 Moderno** - Estilos con gradientes y animaciones

### Backend/API
- **JSON Server** - API REST simulada para desarrollo
- **LocalStorage** - Persistencia de sesión del usuario

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **SweetAlert2** - Alertas elegantes
- **Git** - Control de versiones

---

## 📋 Funcionalidades

### 🔐 Autenticación
- [x] Inicio de sesión con validación
- [x] Registro de nuevos usuarios
- [x] Protección de rutas privadas
- [x] Persistencia de sesión
- [x] Cierre de sesión seguro

### 📊 Gestión de Suscripciones
- [x] Crear nuevas suscripciones
- [x] Editar suscripciones existentes
- [x] Eliminar con confirmación (SweetAlert2)
- [x] Listado visual en tarjetas
- [x] Categorización por tipo de servicio

### 🔍 Búsqueda y Filtrado
- [x] Búsqueda en tiempo real por nombre
- [x] Filtrado por categorías
- [x] Resultados instantáneos
- [x] Indicadores visuales de estado

### 📈 Dashboard y Estadísticas
- [x] Total de suscripciones activas
- [x] Costo mensual y anual
- [x] Alertas de renovación próxima
- [x] Indicadores de suscripciones vencidas

### 🎨 Experiencia de Usuario
- [x] Diseño responsive (móvil, tablet, desktop)
- [x] Animaciones suaves y transitions
- [x] Estados de carga
- [x] Validación de formularios en tiempo real
- [x] Mensajes de error descriptivos

---

## 💻 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm, yarn o bun

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanseedev/suscribia-subscriptions.git
cd suscribia-subscriptions
```

### 2. Instalar dependencias
```bash
# Con npm
npm install

# Con yarn
yarn install

# Con bun
bun install
```

### 3. Ejecutar en modo desarrollo
```bash
# Terminal 1 - API Backend (JSON Server)
npm run server

# Terminal 2 - Frontend (React + Vite)
npm run dev
```

### 4. Abrir en el navegador
- **Frontend:** http://localhost:5173
- **API Backend:** http://localhost:3001

---

## 📁 Estructura del Proyecto

```
suscribia-subscriptions/
├── public/                 # Archivos públicos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── auth/          # Componentes de autenticación
│   │   ├── common/        # Componentes comunes
│   │   ├── layout/        # Componentes de layout
│   │   └── subscription/  # Componentes de suscripciones
│   ├── contexts/          # Context providers (estado global)
│   ├── pages/             # Páginas principales
│   │   ├── Dashboard/     # Panel principal
│   │   ├── Login/         # Página de inicio de sesión
│   │   └── Register/      # Página de registro
│   ├── services/          # Servicios de API
│   ├── App.jsx           # Componente principal
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada
├── db.json               # Base de datos JSON Server
├── package.json          # Dependencias y scripts
└── README.md            # Este archivo
```

---

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run server       # Inicia JSON Server (API)

# Construcción
npm run build        # Construye para producción
npm run preview      # Vista previa de la construcción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run format       # Formatea el código con Prettier
```

---

## 📱 Responsive Design

La aplicación está optimizada para funcionar en todos los dispositivos:

- 📱 **Móvil** (320px - 768px)
- 📟 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)

### Características Responsive:
- Navigation adaptable
- Grid layouts flexibles
- Formularios optimizados para móvil
- Touch-friendly interfaces

---

## 🔒 Seguridad y Buenas Prácticas

- ✅ Validación de formularios en cliente y servidor
- ✅ Protección de rutas con autenticación
- ✅ Sanitización de inputs del usuario
- ✅ Manejo seguro de estados de error
- ✅ Tokens de sesión con expiración

---

## 🎨 Diseño y UI/UX

### Paleta de Colores
- **Primario:** Gradiente azul-púrpura (#667eea → #764ba2)
- **Secundario:** Grises neutros (#f7fafc, #2d3748)
- **Estados:** Verde, amarillo y rojo para éxito, advertencia y error

### Tipografía
- **Font Family:** Sistema de fuentes nativo (-apple-system, Segoe UI, etc.)
- **Pesos:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Animaciones
- Transitions suaves (0.2s ease)
- Hover effects con transform
- Loading spinners animados
- Micro-interacciones intuitivas

---

## 📊 Gestión de Estado

### Context API
- **AuthContext:** Manejo de autenticación y usuario
- **SubscriptionContext:** Gestión de suscripciones y filtros

### LocalStorage
- Persistencia de sesión de usuario
- Datos temporales del formulario

---

## 🔧 APIs y Servicios

### JSON Server
```javascript
// Endpoints disponibles
GET    /users              # Obtener usuarios
POST   /users              # Crear usuario
GET    /subscriptions      # Obtener suscripciones
POST   /subscriptions      # Crear suscripción
PUT    /subscriptions/:id  # Actualizar suscripción
DELETE /subscriptions/:id  # Eliminar suscripción
GET    /categories         # Obtener categorías
```

---

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Error de CORS**
   ```bash
   # Asegúrate de que JSON Server esté ejecutándose
   npm run server
   ```

2. **Página en blanco**
   ```bash
   # Verifica que todas las dependencias estén instaladas
   npm install
   ```

3. **Error de rutas**
   ```bash
   # Verifica que React Router esté configurado correctamente
   # Revisa el archivo App.jsx
   ```

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Tu Nombre**
- GitHub: [@JuanseeDev](https://github.com/JuanseeDev)
- LinkedIn: [JuanseeDev](https://linkedin.com/in/juanseedev)
- Email: jsdiaztapias@gmail.com

---

## 🙏 Agradecimientos

- [React](https://reactjs.org/) por la excelente biblioteca de UI
- [Vite](https://vitejs.dev/) por la herramienta de desarrollo rápida
- [SweetAlert2](https://sweetalert2.github.io/) por las alertas elegantes
- [JSON Server](https://github.com/typicode/json-server) por la API de desarrollo

---

## 📈 Roadmap

### Próximas Características
- [ ] Notificaciones push para renovaciones
- [ ] Categorías personalizables
- [ ] Exportación de datos (PDF/Excel)
- [ ] Dashboard con gráficos interactivos
- [ ] Modo oscuro
- [ ] Integración con APIs reales de servicios
- [ ] Recordatorios por email
- [ ] Análisis de gastos por periodo

---

<div align="center">

**¿Te gusta este proyecto? ¡Dale una ⭐ en GitHub!**

[⬆ Volver arriba](#-Suscribia---gestor-de-suscripciones)

</div>
