# Tarea Técnica de Frontent de JAKALA
## 🌸 Dulces Pétalos - Catálogo de Floristería

Aplicación web desarrollada con **React + Vite** para mostrar el catálogo de productos de la floristería Dulces Pétalos.  
Incluye vista de listado y detalle de cada planta, con diseño responsive y accesible, siguiendo el mockup proporcionado en Figma.

---

## 🛠️ Tecnologías utilizadas
- [nodejs](https://nodejs.org)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)

---

## 📎 Recursos

- Figma del diseño: Acceso al diseño [aquí](https://www.figma.com/design/3XIgWJd1qoOM5FLgHQpQzX/Dulces-P%C3%A9talos)

- [Documentación técnica PDF incluida en /doc](./docs/Dulces_petalos-technical_task.pdf)


---

## ✅ Paso previo: Instalar Node.js y npm

### 🧭 Instalación recomendada para Windows

1. Visita 👉 [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS (Long Term Support)**
3. Instálala como cualquier otra aplicación

Esto instalará **Node.js** y **npm** automáticamente.

---

### 🐧 Instalación recomendada para Ubuntu (Linux)

```bash
sudo apt update
sudo apt install nodejs npm
```

---

### 🧪 Verifica que la instalación fue correcta

Abre tu terminal y escribe:

```bash
node -v
npm -v
```

Deberías ver algo como esto

```bash
v20.x.x
10.x.x
```

---

## 🚀 Cómo clonar y arrancar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/mtranche/dulces-petalos.git
cd dulces-petalos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el proyecto en desarrollo

```bash
npm run dev
```
Esto levantará el proyecto en http://localhost:5173 (o el puerto que indique Vite).

---

## 🧪 Cómo ejecutar los tests

El proyecto utiliza Vitest. Para ejecutar los tests:

```bash
npx vitest
```

Para ver los tests en modo interactivo (watch mode):

```bash
npx vitest --watch
```

Para abrir la UI para ver los tests visualmente:

```bash
npx vitest --ui
```

---

## 📁 Estructura del proyecto

```plaintext
DULCES-PETALOS/
│
├── public/                    → Archivos estáticos accesibles públicamente
│   ├── img/                   → Imágenes visibles directamente desde el navegador
│   │   ├── aloeVera.jpeg
│   │   ├── petuniaAxillaris.jpeg
│   │   └── pteridiumAquilinum.jpeg│  
|   
│
├── src/                       → Código fuente del proyecto
│   ├── assets/                → Recursos internos como imágenes o SVGs (no públicas)
│   │   ├── Logo.png
│   │   ├── Search.png
│   │   └── Vector.svg
│   │
│   ├── components/            → Componentes reutilizables de la UI
│   │   ├── Breadcrumb.jsx
│   │   ├── Card.jsx
│   │   ├── Header.jsx
│   │   ├── Search.jsx
│   │   ├── Breadcrumb.test.jsx
│   │   ├── Card.test.jsx
│   │   ├── Header.test.jsx
│   │   └── Search.test.jsx
│   │
│   ├── data/
│   │   └── fallbackData.json  → Datos de respaldo si la API falla
│   │
│   ├── pages/                 → Vistas principales del sitio
│   │   ├── ProductDetail.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.test.jsx
│   │   └── ProductList.test.jsx
│   │
│   ├── styles/                → Estilos SCSS organizados por tipo
│   │   ├── base/              → Variables, resets, tipografía (_vars.scss)
│   │   ├── components/        → Estilos de cada componente
│   │   │   ├── _breadcrumb.scss
│   │   │   ├── _card.scss
│   │   │   ├── _header.scss
│   │   │   └── _search.scss
│   │   ├── pages/             → Estilos por cada vista
│   │   │   ├── _productDetail.scss
│   │   │   └── _productList.scss
│   │   └── main.scss          → Importa todos los estilos
│   │
│   ├── App.jsx                → Componente principal con enrutado
│   ├── App.test.jsx           → Pruebas de App
│   ├── index.scss             → Estilos globales base
│   └── main.jsx               → Punto de entrada de React y Vite
│
├── index.html                 → HTML base para montar React
├── vite.config.js             → Configuración de Vite
├── package.json               → Dependencias y scripts npm
├── report.json                → Informe de cobertura de tests
└── README.md                  → Documentación principal del proyecto


---

## ✅ Funcionalidades implementadas

- Listado de productos con buscador en tiempo real.

- Detalle de cada producto con imagen, descripción y ficha técnica.

- Breadcrumb para navegación.

- Responsive design (desktop y mobile).

- Accesibilidad básica con etiquetas semánticas, roles y descripciones.

- Estilos modulados con SASS y variables personalizadas.

---

## 📌 API utilizada
Todos los productos se obtienen desde la API proporcionada:

```bash
GET https://dulces-petalos.jakala.es/api/v1/product
GET https://dulces-petalos.jakala.es/api/v1/product/:id
```

---

## 🧼 Scripts adicionales

| Comando          | Descripción                                 |
|------------------|---------------------------------------------|
| `npm run build`  | Genera la versión de producción             |
| `npm run preview`| Sirve la app de producción local            |
| `npm run lint`   | (Si se configura) Linting opcional          |
| `npm run test`   | Ejecuta los tests con Vitest                |

---

## 🧑‍💻 Autor
Creado por Marta Tranche Bouzón.

mtranche@gmail.com
