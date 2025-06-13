# 🛍️ MagicLog - Frontend (React + Vite)

Este proyecto es el frontend del marketplace MagicLog. Permite a los usuarios autenticarse, gestionar productos según su rol y buscar productos desde una SPA moderna y responsiva.

🔗 **Sitio desplegado:** https://magiclog-front-one.vercel.app/

⚠️ **Nota:** Puede haber una pequeña demora al realizar peticiones, ya que el backend se encuentra en Render y entra en modo reposo si no se usa.

🔐 **Usuario de administración disponible en producción:**

- **Correo:** `admin@mail.com`
- **Contraseña:** `123456`

---

## 🧰 Tecnologías usadas

- React 19 + TypeScript
- Vite
- React Router DOM 7
- Zustand (manejo de estado)
- React Query (manejo de datos)
- TailwindCSS + SCSS (estilos)
- Axios (cliente HTTP)
- React Hook Form + Zod (formularios y validación)
- Jest + Testing Library (pruebas)

---

## 📁 Estructura del proyecto

```bash
magiclog-front/
├── public/
├── src/
│   ├── api/            # Configuraciones y servicios API
│   ├── assets/         # Recursos gráficos
│   ├── components/     # Componentes reutilizables (UI, layout, formularios)
│   ├── context/        # Contexto global (auth, etc.)
│   ├── hooks/          # Hooks personalizados (auth, productos, etc.)
│   ├── layouts/        # Layouts generales por rol
│   ├── pages/          # Vistas por ruta y rol (auth, seller, buyer, admin)
│   ├── routes/         # Sistema de rutas y rutas protegidas
│   ├── schemas/        # Validaciones Zod
│   ├── store/          # Zustand (auth, carrito)
│   ├── styles/         # Estilos globales SCSS
│   ├── types/          # Tipos globales (DTOs, respuestas)
│   └── utils/          # Utilidades generales (regex, helpers)
├── tests/              # (Opcional) pruebas unitarias por componente
└── diagrams/           # 📊 Diagramas Mermaid (flujos, vistas, lógica)
```

---

## 🔄 Scripts

```bash
npm install       # Instalar dependencias
npm run dev       # Correr en modo desarrollo
npm run test      # Ejecutar pruebas unitarias
npm run build     # Compilar para producción
```

---

## 📊 Diagramas de flujo

#### Autentificacion

![FLujo de Autentificacion](/diagrams/auth-user.png)

#### Crear producto

![FLujo de Creacion de producto](/diagrams/create-product.png)

#### Flujo de vista de Comprador

![FLujo de Vista Comprador](/diagrams/public-buyer-view.png)

#### Flujo de vista para el administrador

![FLujo de Vista Administrador](/diagrams/admin-view-products.png)

---

_Hecho con React + Vite por Daniel para la prueba técnica de MagicLog._
