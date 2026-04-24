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

## SearchBar — componente

Barra de búsqueda que permite al usuario encontrar un personaje
por su nombre y navegar directamente a su página de detalle.

### Tecnologías usadas
- `useState` — controla el valor del input en tiempo real
- `useNavigate` — redirige a `/characterdetail/:name` al buscar

### Comportamiento
- El texto se convierte automáticamente a mayúsculas mientras se escribe
- El botón queda deshabilitado si el campo está vacío
- Pulsar `Enter` también activa la búsqueda
- `spellCheck` desactivado para evitar subrayados de ortografía

### Fragmento clave
```jsx
const handleSend = () => {
  if (!input.trim()) return;
  navigate(`/characterdetail/${input.trim()}`);
};
```

## ChatBotPage — componente

Página de chat interactivo con IA especializada en el anime Demon Slayer.

### Estado
- `messages` — historial de mensajes del chat (usuario e IA)
- `input` — texto que escribe el usuario
- `loading` — indica si la IA está generando respuesta

### Hooks utilizados
- `useRef` — auto scroll al último mensaje tras cada respuesta
- `useEffect` (guard) — redirige a `/user` si el usuario no ha creado su avatar
- `useNavigate` — navegación programática hacia otras rutas
- `useMemo` — cuenta las consultas del usuario sin recalcular en cada render

#### useMemo

`useMemo` se utiliza en `ChatBotPage.jsx` para contar cuántas consultas
ha enviado el usuario durante la sesión actual.

```jsx
const queryCount = useMemo(() => {
  return messages.filter(msg => msg.role === "user").length;
}, [messages]);
```

En lugar de recontar en cada render, el valor queda memorizado y
solo se recalcula cuando el array `messages` cambia.
`queryCount` alimenta el contador en pantalla al lado del input.

### UX del input
- Texto convertido a mayúsculas automáticamente
- `spellCheck` desactivado
- `Enter` activa el envío
- Botón deshabilitado mientras la IA responde
- Contador de consultas visible dentro del input

---

## useAskGemini — hook

Función asíncrona que se comunica con la API de Google Gemini
y devuelve la respuesta en texto plano.

### Configuración
| Parámetro | Valor |
|---|---|
| Modelo | `gemini-3-flash-preview` |
| API Key | `VITE_API_GEMINI_KEY` en `.env` |
| Rol | Experto en Demon Slayer, respuestas breves y directas |

### Comportamiento
- Si el prompt llega vacío, devuelve un mensaje sin llamar a la API
- Si la respuesta HTTP no es `ok`, lanza un error con el mensaje de Gemini
- Extrae el texto de `candidates[0].content.parts[0].text`



## ⏱️ Registro de Tiempos de Desarrollo

He utilizado `Trello` para el seguimiento y una extensión llamada `Time Tracker - Chronos` para medir el tiempo dedicado a cada funcionalidad del proyecto.

### 📋 Detalle de Tareas

| Categoría | Tarea | Tiempo Invertido | Estado |
| :--- | :--- | :---: | :---: |
| **API** | Configuración de archivo `.env` y conexión API | 15m | ✅ Hecho |
| **API** | Consumo y mapeo de datos de la API | 2h 10m | ✅ Hecho |
| **API** | Refactorizar funciones de llamada a la API | 2h | ✅ Hecho |
| **API** | Hook llamda a la IA mediante API `useAskGemini` | 2h | ✅ Hecho |
| **Interfaz** | Diseño e implementación de `Navbar` | 56m | ✅ Hecho |
| **Interfaz** | Diseño e implementación de `ChatBotPage` | 1h 50m | ✅ Hecho |
| **Interfaz** | Diseño e implementación de `UserPage` | 1h 10m | ✅ Hecho |
| **Interfaz** | Homepage: Imagen principal y sección de inicio | 2h 44m | ✅ Hecho |
| **Interfaz** | Creación de tarjetas en `CharacterListpage` | 2h 20m | ✅ Hecho |
| **Interfaz** | Creación de tarjetas en `CharacterDetailpage` | 1h | ✅ Hecho |
| **Interfaz** | Favicon del proyecto | 7m | ✅ Hecho |
| **Interfaz** | Cambio de logo en navbar (versión sin fondo) | 15m | ✅ Hecho |
| **Interfaz** | Barra `SearchBar` y su `CSS` dentro de `CharacterListPage` | 54m | ✅ Hecho |
| **Layout** | Tarjeta central de `Characterdetailpage` | 1h 40m | ✅ Hecho |
| **Estilos** | CSS de `ChatBotPage` | 1h | ✅ Hecho |
| **Estilos** | CSS de `UserPage` | 1h 10m | ✅ Hecho |
| **Estilos** | CSS de `Characterlistpage` | 2h 12 | ✅ Hecho |
| **Estilos** | CSS de `Characterdetailpage` | 40m | ✅ Hecho |
| **Testing** | Testing a `useAskGemini`,`useCharacterSearch` y `UserPage` | 1h 50m | ✅ Hecho |

### 📊 Resumen de Esfuerzo
* **Tiempo total registrado:** ~ h (sumar al final y cambiar este valor)
* **Última actualización:** 22 de mayo de 2024

---

