# 💰 Expense Tracker - Gestión Financiera Premium

[![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Laravel](https://img.shields.io/badge/Laravel_10-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

Aplicación Full Stack profesional para el control de ingresos y gastos personales. Diseñada con un enfoque "Ultra-Premium" que combina una arquitectura robusta en Laravel con una interfaz de usuario moderna, fluida y altamente visual en React.

---

## 🚀 Características principales

- **Panel de Control (Dashboard)**: Resumen visual inmediato de balance total, ingresos y gastos.
- **Gráficos Interactivos**: Visualización de datos mediante gráficos de barras y circulares (donas) para un análisis financiero claro.
- **Sin Fricción (No Login Demo)**: Acceso directo al dashboard para demostración rápida de habilidades en portafolio.
- **Diseño Glassmorphism**: Interfaz moderna con efectos de cristal, fondos animados y desenfoques elegantes.
- **Arquitectura Robusta**: Backend desarrollado en Laravel siguiendo las mejores prácticas de seguridad y escalabilidad.
- **Documentación Completa**: Todo el código fuente está comentado profesionalmente en español.

---

## 🛠️ Tecnologías utilizadas

### Frontend
- **React 18**: Librería principal para la interfaz de usuario.
- **Tailwind CSS**: Framework para el diseño responsivo y estilizado premium.
- **Recharts**: Librería para la generación de gráficos estadísticos.
- **Lucide React**: Set de iconos modernos y consistentes.
- **Vite**: Herramienta de construcción ultra rápida para el desarrollo.

### Backend
- **Laravel 10**: Framework PHP robusto para la lógica de servidor y API.
- **MySQL**: Motor de base de datos relacional para almacenamiento seguro.
- **Sanctum**: Sistema de autenticación ligero para APIs.

### Herramientas
- **Git & GitHub**: Control de versiones y gestión de repositorio.
- **PostCSS**: Procesamiento de CSS moderno.

---

## 📁 Estructura del proyecto

```
expense-tracker-fullstack/
├── backend/                 # API REST en Laravel
│   ├── app/                 # Modelos, Controladores y Políticas
│   ├── database/            # Migraciones y seeders
│   └── routes/              # Definición de rutas API
├── frontend/                # Aplicación Single Page en React
│   ├── src/
│   │   ├── api/             # Configuración de Axios
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Vistas principales (Dashboard, Login, etc.)
│   │   └── App.jsx          # Componente raíz y lógica principal
│   ├── tailwind.config.js   # Configuración de estilos
│   └── postcss.config.js    # Transformaciones de CSS
├── README.md                # Documentación del proyecto
└── .gitignore               # Archivos excluidos de Git
```

---

## ⚙️ Funcionalidades detalladas

### 1. Panel de Control (Dashboard)
- Visualización de balance neto en tiempo real.
- Tarjetas de resumen con indicadores de tendencia (+%).
- Acceso rápido a las funciones principales de la aplicación.

### 2. Análisis de Actividad Semanal
- Gráfico de barras comparativo entre ingresos y gastos.
- Desglose diario para identificar patrones de consumo.

### 3. Distribución por Categorías
- Gráfico circular que muestra qué porcentaje del presupuesto se destina a cada categoría (Comida, Servicios, Ocio, etc.).
- Leyenda interactiva para una mejor interpretación de los datos.

### 4. Historial de Transacciones
- Listado detallado de movimientos recientes.
- Diferenciación visual clara entre ingresos (verde) y gastos (rojo).
- Iconografía descriptiva por cada tipo de transacción.

### 5. Estética Ultra-Premium
- Uso de fuentes modernas (Plus Jakarta Sans).
- Fondos con gradientes radiales y mallas de color (glow-mesh).
- Micro-animaciones y efectos de hover en todas las tarjetas interactivas.

---

## 🛠️ Instalación y uso

### Requisitos previos
- **PHP >= 8.1** y **Composer** (para el Backend)
- **Node.js** y **npm** (para el Frontend)
- **MySQL** (Servidor de base de datos activo)

### Configuración del Backend (Laravel)

1. **Entrar a la carpeta y configurar el entorno**
   ```bash
   cd backend
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

2. **Configurar la base de datos**
   - Crea una base de datos llamada `expense_tracker` en MySQL.
   - Actualiza los valores de `DB_DATABASE`, `DB_USERNAME` y `DB_PASSWORD` en tu archivo `.env`.

3. **Ejecutar migraciones y servir**
   ```bash
   php artisan migrate
   php artisan serve
   ```

### Configuración del Frontend (React)

1. **Instalar dependencias**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

---

## 📊 Datos de Ejemplo (Dashboard Demo)

El proyecto incluye datos pre-cargados para demostración visual inmediata:

| Transacción | Categoría | Monto | Tipo |
|-------------|-----------|-------|------|
| Cena con amigos | Comida | $45.50 | Gasto |
| Pago mensual | Salario | $2500.00 | Ingreso |
| Uber al trabajo | Transporte | $15.00 | Gasto |
| Netflix | Entretenimiento| $12.99 | Gasto |

---

## 🎨 Personalización de Estilos

### El sistema de diseño se basa en Tailwind CSS. Puedes modificar el tema en:

- `frontend/tailwind.config.js`: Define colores, animaciones y extensiones del tema.
- `frontend/src/index.css`: Contiene las clases base, el efecto `glow-mesh` y utilidades de `glassmorphism`.

---

## Desarrollador

**Kronus2812**

Stack: Frontend, Backend, Python, JavaScript, SQL, PHP, React, CSS, HTML

Repositorio: [github.com/Kronus2812/expense-tracker-fullstack](https://github.com/Kronus2812/expense-tracker-fullstack.git)

---
