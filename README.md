[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/SN9a_ct8)
# Examen Parcial 2 - Aplicación React Futurama

## Datos del estudiantes
- Nombre: Hugo Moncayo

## 📋 Objetivo

Desarrollar una aplicación web utilizando React + Material UI (MUI) que muestre una lista de personajes de Futurama consumiendo datos de una API REST externa.

## 🎯 Requisitos del Proyecto

### Funcionalidad Principal

Los estudiantes deberán implementar una aplicación que:

1. **Consuma la API de Futurama** para obtener la lista de personajes
2. **Muestre los personajes** en una lista ordenada

### API a Utilizar

**Endpoint Base:** `https://futuramaapi.com/api/characters`

#### Parámetros Requeridos

La consulta a la API debe incluir los siguientes parámetros:

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `orderBy` | `id` | Ordenar por ID del personaje |
| `orderByDirection` | `asc` | Dirección ascendente |
| `page` | `1` | Número de página |
| `size` | `50` | Cantidad de resultados por página |

#### Ejemplo de URL completa:
```
https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50
```

#### Estructura de la Respuesta

La API retorna un objeto con la siguiente estructura:

```json
{
  "items": [
    {
      "id": 1,
      "name": "Philip J. Fry",
      "gender": "MALE",
      "status": "ALIVE",
      "species": "HUMAN",
      "createdAt": "2023-12-02T18:32:33.122015Z",
      "image": "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
    },
    {
      "id": 2,
      "name": "Morgan Proctor",
      "gender": "FEMALE",
      "status": "ALIVE",
      "species": "HUMAN",
      "createdAt": "2023-12-02T18:32:33.122015Z",
      "image": "https://futuramaapi.com/static/img/human/morgan-proctor.webp"
    }
  ]
}
```

#### Campos Disponibles

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | number | Identificador único del personaje |
| `name` | string | Nombre del personaje |
| `gender` | string | Género (MALE, FEMALE, OTHER) |
| `status` | string | Estado vital (ALIVE, DEAD, UNKNOWN) |
| `species` | string | Especie (HUMAN, ROBOT, ALIEN, etc.) |
| `createdAt` | string | Fecha de creación en la base de datos |
| `image` | string | URL de la imagen del personaje |

## 🛠️ Requisitos Técnicos

### Tecnologías Obligatorias
- **Framework:** React 19.0.0 (ya instalado)
- **Librería UI:** Material UI (MUI) (ya instalado)
- **Build Tool:** Vite
- **HTTP Client:** Axios (**OBLIGATORIO** - debe instalarse)

### Instalación de Axios

**IMPORTANTE:** Antes de empezar, instala Axios ejecutando:

```bash
npm install axios
```

### Componentes MUI Recomendados
- `List` / `ListItem` - Para la lista de personajes
- `Card` / `CardContent` - Para mostrar información del personaje
- `Avatar` - Para la imagen del personaje
- `AppBar` / `Toolbar` / `Typography` - Para el encabezado
- `Container` / `Box` - Para la estructura del contenido
- `CircularProgress` - Para indicar carga de datos
- `Alert` - Para mostrar errores

### Separación de Estilos (Obligatorio)
- Es obligatorio separar los estilos CSS del HTML/JSX.
- No se permite resolver el diseño únicamente con estilos inline.
- Organiza los estilos en archivos `.css` separados por componente o vista.

### Arquitectura por Capas (Obligatorio)
- Es obligatorio separar la aplicación en capas para mantener una arquitectura limpia.
- Todas las llamadas a la API deben estar en una carpeta `services`.
- Los componentes de UI deben estar en una carpeta `components`.
- No se debe consumir Axios directamente dentro de componentes de presentación.

Estructura sugerida:

```text
src/
  components/
    CharacterCard.jsx
    CharacterList.jsx
  services/
    futuramaService.js
  pages/
    Home.jsx
```

## 📱 Funcionalidades Esperadas

### 1. Modificar Vista Home (`src/pages/Home.tsx`)

**IMPORTANTE:** Debes modificar la página Home existente para que cargue y muestre los personajes de Futurama desde la API.

#### Requisitos de la Vista Home:
- **Consumir la API** con los parámetros especificados al cargar el componente
- **Mostrar una lista** de los personajes obtenidos
- Cada ítem de la lista debe mostrar:
  - **Imagen** del personaje
  - **Nombre** del personaje
  - **Género** (MALE, FEMALE, OTHER)
  - **Estado vital** (ALIVE, DEAD, UNKNOWN)
- Los datos deben provenir del array `items` de la respuesta de la API

#### Ejemplo de estructura de ítem:
```
┌─────────────────────────────┐
│ [Imagen]  Philip J. Fry     │
│           Género: MALE       │
│           Estado: ALIVE      │
└─────────────────────────────┘
```

### 2. Manejo de Estados
- Estado de error (si la API falla)
- Estado vacío (si no hay datos)

## 🎨 Criterios de Evaluación

**Total: 50 puntos**

| Criterio | Puntos |
|----------|--------|
| Consumo correcto de la API con Axios y parámetros solicitados desde Home | 13 pts |
| Visualización en Home: imagen, nombre, género y estado vital | 13 pts |
| Manejo de estados (error, vacío) | 6 pts |
| Diseño UI/UX con componentes MUI | 6 pts |
| Separación por capas (uso de `components` y `services`) | 6 pts |
| Calidad de código (JavaScript) | 6 pts |
| **TOTAL** | **50 pts** |

## 🚀 Instrucciones de Inicio

### Instalación
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
npm run dev
```


## 📝 Notas Importantes

1. **Instalación de Axios:** Lo primero es instalar Axios con `npm install axios`
2. **Tiempo de desarrollo:** 3 horas
3. **Entrega:** Subir proyecto a repositorio Git (GitHub/GitLab)
4. **Documentación:** Se sugiere incluir comentarios en el código JavaScript
5. **Testing:** Bonus points por implementar pruebas unitarias
6. **Uso de Axios:** Todas las llamadas a la API deben hacerse con Axios, no con Fetch API

## 🆘 Recursos de Ayuda

- [Documentación React](https://react.dev)
- [Documentación MUI](https://mui.com/material-ui/)
- [Futurama API Docs](https://futuramaapi.com)
- [Documentación JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript)

