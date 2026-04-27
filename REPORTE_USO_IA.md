# Reporte: Uso de IA en Demon Slayer App 


Este documento detalla el proceso de desarrollo del proyecto **Demon Slayer App** utilizando Google Gemini como herramienta de asistencia principal y Claude secundaria en algunos puntos improtantes . El proyecto es una aplicación web interactiva construida con React JS y Vite que consume la API de Kimetsu no Yaiba.

Desarrollando cada parte del proyecto de forma independiente. La IA ayudó a generar estructuras iniciales que posteriormente fueron revisadas, adaptadas y optimizadas manualmente por mí.

---

## Cómo se utilizó la IA
 
- Apoyo en la lógica de programación  
- Creando el CSS principal de cada componente pero luego refinado manualmente.   
- Preguntando por fallos y detectando errores

Todo el código generado fue:
- revisado  
- modificado  
- adaptado al contexto del proyecto  

---

## Rol de la IA

La inteligencia artificial permitió:

- Acelerar el desarrollo  
- Reducir tareas repetitivas  
- Servir como guía técnica  
- Como profesor particular

Sin embargo, el resultado final depende de las decisiones del desarrollador y del trabajo manual.

---

## Limitaciones detectadas

La IA presentó limitaciones en:

- Diseño visual (UI)  
- Experiencia de usuario (UX)  
- Ajustes finos de estilos (márgenes, tamaños, alineación)  
- Código que mayormente no funcionaba. Necesitaba pequeñas modificaciones o cambiar de IA.

Estos aspectos requirieron intervención manual para lograr un resultado coherente.

---

## Conclusión

La IA funciona mejor como asistente, no como sustituto del desarrollador.

La combinación de:
- IA (velocidad y soporte)  
- trabajo manual (control y calidad)  

Permitió construir una aplicación funcional, bien estructurada y visualmente consistente con menos esfuerzo y más rapidamente. 
Creo que debería haber usado más el github Copilot o Claude integrado en el VisualStudio Code. 
Lo haré para los próximos proyectos donde sea necesario. Porque siento que para apredender es mejor usarla menos y ya al tener una base sólida si apoyarte en ella para ser mucho más productivo.


---















## Rol de Google Gemini en el Desarrollo

### Enfoque Metodológico: Desarrollo Iterativo Parte por Parte

El desarrollo del proyecto se realizó mediante un **enfoque modular y progresivo**, donde cada componente y funcionalidad se solicitó a Google Gemini en segmentos independientes. Esto permitió:

✅ Mayor control sobre el código generado  
✅ Evaluación y ajuste de cada pieza de forma aislada  
✅ Fácil identificación de problemas específicos  
✅ Flexibilidad para introducir cambios según necesidades

### Componentes Desarrollados con Asistencia de Gemini

#### Componentes React (Components)

Google Gemini fue fundamental en la creación de:

- **CharacterCard.jsx** - Tarjeta visual para mostrar personajes
- **CharacterDetail.jsx** - Componente para mostrar información detallada
- **SearchBar.jsx** - Funcionalidad de búsqueda avanzada
- **AvatarSelector.jsx** - Selector interactivo de avatares

**Proceso:** Se solicitaba a Gemini que generara la estructura base del componente, luego se refinaba manualmente. 

#### 2.2 Hooks Personalizados (Custom Hooks)

- **useAskGemini.js** - Hook para integración con la API de Google Gemini
- **useCharacterSearch.js** - Hook para búsqueda y filtrado de personajes

**Ejemplo de iteración:**

```javascript
// Gemini generaba la estructura base
// Luego se ajustaba manualmente para optimización y preferencias personales
```

#### 2.3 Context API

- **CharacterContext.jsx** - Gestión global del estado de personajes
- **UserContext.jsx** - Gestión de información del usuario

#### 2.4 Páginas (Pages)

Gemini asistió en la estructura inicial de:

- HomePage
- CharacterListPage
- CharacterDetailPage
- ChatBotPage
- UserPage

---

## 3. Proceso de Colaboración con Gemini

### 3.1 Metodología: Segmentación de Tareas

```
1. ANÁLISIS DE REQUERIMIENTO
   └─ Definir qué se necesita (componente, hook, función, etc.)

2. SOLICITUD A GEMINI
   └─ Proporcionar contexto y especificaciones

3. REVISIÓN DEL CÓDIGO GENERADO
   └─ Analizar la solución propuesta

4. MODIFICACIÓN MANUAL
   └─ Ajustar según criterios personales

5. PRUEBA E INTEGRACIÓN
   └─ Validar funcionamiento en el proyecto
```

### 3.2 Ventajas del Enfoque Parte por Parte

| Aspecto          | Ventaja                                               |
| ---------------- | ----------------------------------------------------- |
| **Control**      | Cada pieza de código es revisada antes de integración |
| **Aprendizaje**  | Se entiende el propósito de cada segmento             |
| **Debugging**    | Errores se aíslan fácilmente                          |
| **Flexibilidad** | Se pueden hacer cambios sin afectar todo el proyecto  |
| **Calidad**      | Mayor precisión en la solución final                  |

---

## 4. Refactorización Manual del Código

### 4.1 Ajustes en Lógica

Aunque Gemini proporcionaba soluciones funcionales, se realizaron múltiples modificaciones manuales en:

- **Optimización de funciones** - Simplificar y mejorar eficiencia
- **Manejo de errores** - Agregar validaciones robustas
- **Nombres de variables** - Mejorar legibilidad y consistencia
- **Estructura del código** - Reorganizar para mayor claridad
- **Funcionalidades adicionales** - Extender beyond de lo propuesto

### 4.2 Ejemplos de Refactorización

**Antes (Gemini):**

```javascript
// Código funcional pero genérico
const [data, setData] = useState(null);
// ... lógica básica
```

**Después (Personalizado):**

```javascript
// Optimizado y adaptado al proyecto
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(false);
// ... lógica mejorada con validaciones específicas
```

---

## 5. Desafíos en la Interfaz Visual (UI/UX)

### 5.1 Problemas Comunes Encontrados

Gemini generaba estilos CSS funcionales pero frecuentemente presentaba inconsistencias en:

❌ **Márgenes (Margins)** - Espaciado irregular entre elementos  
❌ **Relleno (Padding)** - Distribución desigual dentro de contenedores  
❌ **Tamaños de texto** - Tipografía desproporcionada  
❌ **Dimensiones de imágenes** - Escalado inconsistente  
❌ **Alineación** - Elementos desalineados horizontalmente/verticalmente  
❌ **Espacios en blanco** - Distribución poco armónica

### 5.2 Soluciones Implementadas

#### Retoques de Márgenes y Padding

Se realizaron ajustes finos en cada componente:

```css
/* Ajustes manuales para harmonizar espacios */
.card {
  margin: 1rem 0.5rem; /* Ajustado manualmente */
  padding: 1.5rem; /* Refinado según diseño */
}
```

#### Tipografía

Se estandarizaron tamaños de fuente:

```css
/* Escala tipográfica consistente */
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
p {
  font-size: 1rem;
}
small {
  font-size: 0.875rem;
}
```

#### Imágenes y Medios

Se normalizaron dimensiones:

```css
/* Aspecto uniforme para imágenes */
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
```

#### Responsive Design

Se agregaron media queries personalizadas para diferentes dispositivos.

### 5.3 Impacto de los Retoques Visuales

- **Consistencia:** 90% del tiempo se retocaba manualmente para conseguir uniformidad
- **Profesionalismo:** El diseño final luce pulido y coherente
- **UX Mejorada:** Mejor experiencia de usuario con espacios equilibrados
- **Marca Personal:** Refleja preferencias de diseño específicas

---

## 6. Contribuciones Personales 100%

### 6.1 Diseño Visual General

**Paleta de Colores:** Selección propia basada en el tema de Demon Slayer  
**Tipografía:** Elección de fuentes coherentes con la identidad visual  
**Layout:** Estructura visual pensada desde cero  
**Componentes visuales:** Iconografía y elementos gráficos personalizados

### 6.2 Arquitectura de Carpetas

La estructura del proyecto es completamente original:

```
src/
├── components/    ← Componentes reutilizables
├── context/       ← State management centralizado
├── hooks/         ← Lógica personalizada
├── pages/         ← Vistas por ruta
└── test/          ← Tests organizados
```

**Decisiones de arquitectura:**

- Separación clara entre componentes y páginas
- Context API para estado global
- Custom hooks para lógica reutilizable
- CSS Modules para evitar colisiones de estilos

### 6.3 Estructura de Componentes

Cada componente sigue un patrón consistente:

```
ComponentName/
├── ComponentName.jsx         # Lógica React
└── ComponentName.module.css  # Estilos modulares
```

**Ventajas:**

- Fácil localización de archivos relacionados
- Escalabilidad del proyecto
- Componentes autónomos y reutilizables

### 6.4 Decisiones de Diseño

| Decisión         | Razón                                          |
| ---------------- | ---------------------------------------------- |
| CSS Modules      | Evitar conflictos de nombres                   |
| React Router DOM | Navegación SPA fluida                          |
| Context API      | Estado global sin librerías externas           |
| Custom Hooks     | Lógica encapsulada y reutilizable              |
| Vite             | Build rápido y development experience mejorada |

---

## 7. Funcionalidades Clave Desarrolladas

### 7.1 Búsqueda de Personajes (useCharacterSearch.js)

- Filtrado en tiempo real
- Búsqueda por nombre y atributos
- Paginación eficiente
- **Nivel de personalización:** Muy alto

### 7.2 Integración con Google Gemini (useAskGemini.js)

- ChatBot interactivo sobre Demon Slayer
- Consultas en tiempo real
- Manejo de errores robusto
- **Nivel de personalización:** Muy alto

### 7.3 Gestión de Usuario (UserContext.jsx)

- Perfil de usuario
- Avatar personalizado
- Preferencias guardadas
- **Nivel de personalización:** Muy alto

### 7.4 Detalle de Personaje (CharacterDetailPage)

- Información completa de personajes
- Galería de imágenes
- Datos extendidos de la API
- **Nivel de personalización:** Muy alto

---

## 8. Testing y Calidad

### 8.1 Suite de Tests Implementada

```
test/
├── hooks/
│   ├── useAskGemini.test.js
│   └── useCharacterSearch.test.jsx
└── pages/
    └── UserPage.test.jsx
```

### 8.2 Tecnologías de Testing

- **Framework:** Vitest
- **Utilidades:** React Testing Library
- **Cobertura:** Disponible mediante `npm run test:coverage`

### 8.3 Comandos de Testing

```bash
npm run test              # Ejecutar tests una vez
npm run test:watch      # Modo vigilancia
npm run test:coverage   # Reporte de cobertura
```

---

## 9. Flujo de Desarrollo Típico

```
┌─────────────────────────────────────────────────────────┐
│  1. Identificar necesidad (componente/función)          │
├─────────────────────────────────────────────────────────┤
│  2. Describir requerimiento a Gemini                    │
├─────────────────────────────────────────────────────────┤
│  3. Analizar código generado                            │
├─────────────────────────────────────────────────────────┤
│  4. Realizar ajustes y optimizaciones manuales           │
├─────────────────────────────────────────────────────────┤
│  5. Probar integración en proyecto                      │
├─────────────────────────────────────────────────────────┤
│  6. Refinar UI/UX (márgenes, padding, tipografía)      │
├─────────────────────────────────────────────────────────┤
│  7. Commit y documentación                              │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Estadísticas de Desarrollo

| Métrica               | Descripción                   |
| --------------------- | ----------------------------- |
| **Componentes**       | 6 componentes reutilizables   |
| **Páginas**           | 5 vistas principales          |
| **Custom Hooks**      | 2 hooks personalizados        |
| **Context Providers** | 2 gestores de estado global   |
| **Módulos CSS**       | Uno por componente/página     |
| **Tests**             | 3 suites de tests             |
| **Refactorismos UI**  | ~90% de componentes retocados |

---

## 11. Lecciones Aprendidas

### 11.1 Sobre el Uso de IA en Desarrollo

✅ **Gemini es excelente para:** Estructuras base, sintaxis, patrones comunes  
✅ **Requiere supervisión en:** Detalles visuales, estilos CSS específicos  
✅ **Mejor si:** Se valida cada segmento antes de integración

### 11.2 Mejores Prácticas Aplicadas

1. **Modularidad:** Dividir tareas en segmentos pequeños
2. **Revisión:** Revisar todo código generado antes de usar
3. **Personalización:** Adaptar soluciones a las necesidades reales
4. **Documentación:** Mantener código legible y comentado
5. **Testing:** Validar funcionalidad con pruebas automatizadas

### 11.3 Recomendaciones para Futuros Proyectos

- Utilizar IA como asistente, no como solución final
- Desarrollar criterio propio sobre calidad de código
- Siempre refinar la interfaz visual manualmente
- Documentar decisiones arquitectónicas
- Mantener control total sobre la estructura del proyecto

---

## 12. Conclusiones

### Resumen de Rol de IA

La integración de **Google Gemini** en este proyecto fue **efectiva como herramienta de asistencia**, permitiendo:

- **Agilizar el desarrollo** al proporcionar estructuras iniciales
- **Reducir tiempo** en tareas repetitivas
- **Facilitar la codificación** mediante sugerencias contextuales

Sin embargo, el **verdadero valor del proyecto proviene de:**

- ✨ **Diseño visual personalizado** (100% manual)
- ✨ **Arquitectura de carpetas** (100% original)
- ✨ **Refinamiento de componentes** (90%+ manual)
- ✨ **Optimización de estilos** (100% manual)
- ✨ **Lógica adaptada** (70%+ personalización)

### Valoración Final

Este proyecto demuestra que la **combinación eficaz de IA + trabajo manual** produce resultados superiores a cualquiera de estos elementos por separado. Gemini aportó velocidad y estructura, pero tu intervención manual garantizó calidad, coherencia y un producto profesional.

**El resultado es una aplicación web funcional, visualmente atractiva y bien estructurada que refleja decisiones técnicas conscientes y un estándar de calidad elevado.**

---

## 📝 Notas Finales

- Este proyecto utiliza **React 19.2.5** (última versión estable)
- Estructura escalable para futuros desarrollos
- Testing automatizado para garantizar calidad
- Documentación clara para mantenimiento futuro
- Listo para producción con Netlify

---

**Fecha de reporte:** Abril 2026  
**Proyecto:** Demon Slayer App - REACT Proyecto 2  
**Herramienta de IA utilizada:** Google Gemini  
**Método de desarrollo:** Iterativo, parte por parte, con refinamiento manual
