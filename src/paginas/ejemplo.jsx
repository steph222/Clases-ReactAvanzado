/*
Estructuras Pequeñas
src/
 ├── App.jsx
 ├── index.js
 ├── components/       # Componentes reutilizables
 │    └── Navbar.jsx
 │    └── Perfil.jsx
 ├── context/          # Context API
 │    └── UsuarioContext.js
 ├── styles/           # Archivos CSS
 │    └── App.css


Estructas Mediana
 src/
 ├── App.jsx
 ├── index.js
 │
 ├── assets/            # Imágenes, íconos, fuentes
 ├── components/        # Componentes reutilizables
 │    └── Navbar.jsx
 │    └── Footer.jsx
 │
 ├── pages/             # Páginas completas (rutas)
 │    └── Home.jsx
 │    └── Perfil.jsx
 │
 ├── context/           # Context API Providers
 │    └── UsuarioContext.js
 │    └── TemaContext.js
 │
 ├── hooks/             # Custom Hooks
 │    └── usePersistedState.js
 │
 ├── services/          # Conexiones con APIs
 │    └── api.js
 │
 ├── styles/            # Estilos globales o por módulo
 │    └── variables.css



Estructuras Grandes
 src/
 ├── app/              # Configuración global
 │    └── store.js
 │    └── routes.jsx
 │
 ├── features/         # Organización por funcionalidad
 │    ├── auth/
 │    │   ├── AuthContext.js
 │    │   ├── Login.jsx
 │    │   ├── Register.jsx
 │    │   └── authService.js
 │    │
 │    ├── usuario/
 │    │   ├── Perfil.jsx
 │    │   ├── UsuarioContext.js
 │    │   └── usuarioService.js
 │    │
 │    ├── tema/
 │    │   ├── TemaContext.js
 │    │   └── ToggleTema.jsx
 │
 ├── components/       # UI genérica (botones, modales, inputs)
 │    └── Button.jsx
 │    └── Modal.jsx
 │
 ├── hooks/            # Hooks globales reutilizables
 │    └── useFetch.js
 │
 ├── styles/           # CSS/SCSS global
 └── assets/           # Imágenes, íconos, fuentes
*/