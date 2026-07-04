import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { getCharacters } from './futuramaService';

// Simulamos el comportamiento de axios
vi.mock('axios');

describe('Pruebas unitarias en futuramaService', () => {
  it('Debe obtener con éxito los personajes mapeando la propiedad items', async () => {
    // Datos simulados idénticos a la estructura del README
    const mockResponse = {
      data: {
        items: [
          { id: 1, name: 'Philip J. Fry', status: 'ALIVE', species: 'HUMAN' },
          { id: 2, name: 'Bender', status: 'ALIVE', species: 'ROBOT' }
        ]
      }
    };

    // Forzamos a axios.get a devolver nuestra respuesta simulada
    axios.get.mockResolvedValue(mockResponse);

    const result = await getCharacters();

    // Verificaciones (Assertions)
    expect(axios.get).toHaveBeenCalledWith(
      'https://futuramaapi.com/api/characters',
      expect.objectContaining({
        params: { orderBy: 'id', orderByDirection: 'asc', page: 1, size: 50 }
      })
    );
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Philip J. Fry');
  });

  it('Debe manejar adecuadamente los errores de la API', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(getCharacters()).rejects.toThrow('Network Error');
  });
});