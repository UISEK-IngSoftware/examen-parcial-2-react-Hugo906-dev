// 1. Agrega el componente TextField en tus imports de @mui/material
import { 
  Container, Grid, Typography, CircularProgress, Alert, Box, AppBar, Toolbar, 
  TextField 
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/futuramaService";
import { CharacterCard } from "../components/CharacterCard";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // NUEVO: Estado para filtrar por texto
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        setCharacters(data);
        setError(null);
      } catch (err) {
        setError("No se pudo conectar con el servidor de Futurama.");
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);

  // NUEVO: Filtrado lógico en tiempo real
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2", mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Futurama Universe App — Examen Parcial 2
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {loading && (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="50vh" gap={2}>
            <CircularProgress color="primary" size={60} />
            <Typography variant="h6" color="textSecondary">Cargando personajes...</Typography>
          </Box>
        )}

        {!loading && error && (
          <Box my={4}><Alert severity="error" variant="filled">{error}</Alert></Box>
        )}

        {/* CONTENIDO PRINCIPAL RENDERIZADO */}
        {!loading && !error && (
          <Box mb={6}>
            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" mb={4} gap={2}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", color: "#333" }}>
                Lista de Personajes
              </Typography>
              
              {/* NUEVO: Input estilizado de búsqueda */}
              <TextField
                label="Buscar personaje..."
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ width: { xs: "100%", sm: "300px" }, backgroundColor: "#fff" }}
              />
            </Box>

            {filteredCharacters.length === 0 ? (
              <Alert severity="info">No hay personajes que coincidan con "{searchTerm}"</Alert>
            ) : (
              <Grid container spacing={3}>
                {filteredCharacters.map((character) => (
                  <Grid item key={character.id} xs={12} sm={6} md={4}>
                    <CharacterCard character={character} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;