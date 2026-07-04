import axios from 'axios';

// Configuración de la URL base de la API de Futurama
const API_BASE_URL = 'https://futuramaapi.com/api/characters';

/**
 * Obtiene la lista de personajes con los parámetros requeridos por el examen.
 * @returns {Promise<Array>} Lista de personajes (items)
 */
export const getCharacters = async () => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        orderBy: 'id',
        orderByDirection: 'asc',
        page: 1,
        size: 50,
      },
    });
    
    // Retornamos directamente el arreglo 'items' según la estructura de la API
    return response.data.items || [];
  } catch (error) {
    console.error('Error en futuramaService al obtener personajes:', error);
    throw error; // Re-lanzamos el error para que el componente lo maneje en la UI
  }
};