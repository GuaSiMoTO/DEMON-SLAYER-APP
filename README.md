# Demon Slayer App 👹⚔️
¡Bienvenido a la Demon Slayer App! Una aplicación web construida con React JS y Vite que consume la API de Kimetsu no Yaiba para mostrar información detallada sobre los personajes de la serie.

## Características
Listado de personajes: Navegación paginada para explorar todos los personajes.

Búsqueda avanzada: Funcionalidad para buscar personajes específicos por nombre.

Navegación fluida: Uso de react-router-dom para una experiencia de usuario sin recargas.

Estilos Modulares: Uso de CSS Modules para evitar conflictos de estilos.

Custom Hooks: Lógica de fetching encapsulada y reutilizable.

## 📂 Estructura del Proyecto
```markdown
REACT-PROYECTO/
├── public/
│   └── demon-logo.png          # Logo principal de la app
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx      # Componente de navegación
│   │   │   └── Navbar.module.css
│   │   ├── CharacterCard.jsx   # Card individual de personaje
│   │   ├── CharacterList.jsx   # Grid/Lista de personajes
│   │   ├── FilterBar.jsx       # Barra de filtrado por categorías
│   │   └── SearchBar.jsx       # Input de búsqueda dinámica
│   ├── context/                # Proveedores de estado global
│   ├── hooks/
│   │   └── useDemonSearch.js   # Hook para consumo de la API
│   ├── App.jsx                 # Definición de rutas y layout
│   ├── main.jsx                # Punto de entrada (Render)
│   ├── global.css              # Variables y estilos base
│   └── index.css               # Estilos generales
├── .env                        # Variables de entorno (API URL)
.
.
```

## Tecnologías Utilizadas

- React 18 (Vite)

- React Router DOM (Navegación)

- CSS Modules (Estilos específicos)

- Fetch API (Consumo de datos)

## Configuración del Entorno

Para que la aplicación funcione correctamente, necesitas configurar la URL de la API. Crea un archivo .env en la raíz del proyecto:
 
VITE_DEMON_SLAYER_API=https://www.demonslayer-api.com/api/v1/characters

## Lógica Principal: useDemonSearch

El núcleo de la aplicación reside en el hook personalizado useDemonSearch, el cual gestiona:

- Paginación: Permite saltar entre las diferentes páginas de la API.

- Estados de carga: Controla los estados de loading, error y characters.

- Seguridad: Valida la existencia de variables de entorno antes de realizar peticiones.