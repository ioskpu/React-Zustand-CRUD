import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { Typography, List, ListItem, Button } from '@mui/material';

const MarcasPage: React.FC = () => {
  const store = useStore();

  useEffect(() => {
    // Obtener marcas desde el servidor y actualizar el estado global
    axios.get('/api/marcas')
      .then(response => store.setMarcas(response.data))
      .catch(error => console.error('Error al obtener marcas', error));
  }, [store]);

  return (
    <div>
      <Typography variant="h2">Marcas de Vehículos</Typography>

      <List>
        {store.marcas.map(marca => (
          <ListItem key={marca._id}>
            <Typography variant="h6">
              <strong>{marca.nombre}</strong> - {marca.descripcion}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Button component={Link} to="/marcas/nueva" variant="contained" color="primary">
        Agregar Nueva Marca
      </Button>

      <br />
      
      <Button component={Link} to="/" variant="outlined" color="secondary">
        Volver a la Página Principal
      </Button>
    </div>
  );
};

export default MarcasPage;
