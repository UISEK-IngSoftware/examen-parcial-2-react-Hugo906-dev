import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';
import '../styles/CharacterCard.css'; // Separación obligatoria de estilos

export const CharacterCard = ({ character }) => {
  const { name, gender, status, species, image } = character;

  // Función auxiliar para definir el color del Chip según el estado vital
  const getStatusColor = (statusVital) => {
    switch (statusVital?.toUpperCase()) {
      case 'ALIVE': return 'success';
      case 'DEAD': return 'error';
      default: return 'default';
    }
  };

  return (
    <Card className="character-card" elevation={2}>
      <Box className="card-header-container">
        <Avatar 
          src={image} 
          alt={name} 
          className="character-avatar"
        />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
      </Box>
      
      <CardContent className="character-info-box">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body2">
            <span className="info-label">Especie:</span> {species}
          </Typography>
          
          <Typography variant="body2">
            <span className="info-label">Género:</span> {gender}
          </Typography>
          
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <Typography variant="body2" className="info-label">
              Estado:
            </Typography>
            <Chip 
              label={status} 
              size="small" 
              color={getStatusColor(status)} 
              variant="outlined"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};