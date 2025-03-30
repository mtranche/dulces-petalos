# Tarea Técnica de Frontent de JAKALA
# 🌸 Dulces Pétalos - Catálogo de Floristería

Aplicación web desarrollada con **React + Vite** para mostrar el catálogo de productos de la floristería Dulces Pétalos.  
Incluye vista de listado y detalle de cada planta, con diseño responsive y accesible, siguiendo el mockup proporcionado en Figma.

---

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)

---

## 🚀 Cómo clonar y arrancar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/dulces-petalos.git
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

## 🧪 Cómo ejecutar los tests

El proyecto utiliza Vitest. Para ejecutar los tests:

```bash
npm run test
```

Para ver los tests en modo interactivo (watch mode):

```bash
npx vitest --watch
```

Para abrir la UI para ver los tests visualmente:

```bash
npx vitest --ui
```

## 📁 Estructura del proyecto

```plaintext
src/
│
├── assets/              → Imágenes y logos
├── components/          → Componentes reutilizables (Card, Header, Search, etc.)
├── pages/               → Vistas principales (ProductList, ProductDetail)
├── styles/              → Estilos organizados por base / components / pages
│   ├── base/            → Tokens, variables, tipografía
│   ├── components/      → Estilos de cada componente
│   └── pages/           → Estilos específicos por página
├── App.jsx              → Componente principal con routing
├── main.jsx             → Punto de entrada
└── index.html           → HTML principal
```

## ✅ Funcionalidades implementadas

- Listado de productos con buscador en tiempo real.

- Detalle de cada producto con imagen, descripción y ficha técnica.

- Breadcrumb para navegación.

- Responsive design (desktop y mobile).

- Accesibilidad básica con etiquetas semánticas, roles y descripciones.

- Estilos modulados con SASS y variables personalizadas.

## 📌 API utilizada
Todos los productos se obtienen desde la API proporcionada:

```bash
GET https://dulces-petalos.jakala.es/api/v1/product
GET https://dulces-petalos.jakala.es/api/v1/product/:id
```

## 🧼 Scripts adicionales

| Comando          | Descripción                                 |
|------------------|---------------------------------------------|
| `npm run build`  | Genera la versión de producción             |
| `npm run preview`| Sirve la app de producción local            |
| `npm run lint`   | (Si se configura) Linting opcional          |
| `npm run test`   | Ejecuta los tests con Vitest                |

## 📎 Recursos

- Figma del diseño: Acceso al diseño [aquí](https://www.figma.com/design/3XIgWJd1qoOM5FLgHQpQzX/Dulces-P%C3%A9talos)

- [Documentación técnica PDF incluida en /doc](./docs/Dulces_petalos-technical_task.pdf)

## 🧑‍💻 Autor
Creado por Marta Tranche Bouzón.

mtranche en GitHub.

mtranche@gmail.com
