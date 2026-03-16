# 💰 XPENSE TRACKER - Full Stack Project

¡Bienvenido a **Xpense Tracker**! Esta es una aplicación web profesional de control de gastos diseñada para ofrecer una experiencia visual de alto impacto y una gestión financiera eficiente. Desarrollada con un stack moderno (**Laravel 10** + **React 18**), este proyecto demuestra la integración de una API robusta con una interfaz de usuario "Ultra-Premium".

![Dashboard Preview](file:///C:/Users/tomas/.gemini/antigravity/brain/86a608df-6c32-4556-9eef-c2963c2c8701/expense_tracker_dashboard_1773631498014.png)

## 🚀 Características Principales

- **Dashboard de Alto Nivel**: Visualización de balance total, ingresos y gastos con una estética de "Glassmorphism".
- **Analítica Visual**: Gráficos interactivos de barras y circulares (Recharts) para entender la distribución de tus finanzas.
- **Gestión de Transacciones**: CRUD completo para registrar ingresos y gastos con categorías personalizadas.
- **Autenticación Segura**: Sistema de registro e inicio de sesión utilizando **Laravel Sanctum**.
- **Diseño Responsivo**: Adaptado para cualquier dispositivo utilizando **Tailwind CSS**.
- **Código Documentado**: Todo el código fuente está documentado profesionalmente en **Español**.

## 🛠️ Stack Tecnológico

### Backend (API REST)
- **Framework**: Laravel 10
- **Base de Datos**: MySQL
- **Autenticación**: Laravel Sanctum
- **Arquitectura**: Model-View-Controller (MVC) con Policies de seguridad.

### Frontend (SPA)
- **Librería**: React 18 (Vite)
- **Estilos**: Tailwind CSS + PostCSS
- **Iconografía**: Lucide React
- **Gráficos**: Recharts
- **Gestión de Estado**: React Context API

## 💻 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/expense-tracker-fullstack.git
cd expense-tracker-fullstack
```

### 2. Configurar el Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```
*Configura tu base de datos en el archivo `.env` y luego ejecuta:*
```bash
php artisan migrate
php artisan serve
```

### 3. Configurar el Frontend (React)
```bash
cd ../frontend
npm install
npm run dev
```

## 📄 Documentación y Notas del Desarrollador
Este proyecto fue diseñado con un fuerte enfoque en la **estética visual (UI)** y la **experiencia de usuario (UX)**. Se han utilizado técnicas modernas de CSS como desenfoques de fondo (backdrop-blur), mallas de color animadas y tipografía profesional (Plus Jakarta Sans).

---
**Desarrollado con ❤️ por Antigravity para Portafolio Profesional.**
