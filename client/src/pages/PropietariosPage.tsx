import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { Typography, List, ListItem, Button } from '@mui/material'; // Importamos componentes de Material UI

const PropietariosPage: React.FC = () => {
  const store = useStore();

  useEffect(() => {
    // Obtener propietarios desde el servidor y actualizar el estado global
    axios.get('/api/propietarios')
      .then(response => store.setPropietarios(response.data))
      .catch(error => console.error('Error al obtener propietarios', error));
  }, [store]);

  return (
    <div>
      <Typography variant="h2">Propietarios</Typography>

      <List>
        {store.propietarios.map(propietario => (
          <ListItem key={propietario._id}>
            <Typography variant="h6">
              <strong>{propietario.nombre} {propietario.apellido}</strong> - País: {propietario.paisResidencia}
              <br />
              Marcas: {propietario.marcas.map(marca => store.marcas.find(m => m._id === marca)?.nombre).join(', ')}
              <br />
              Tipos: {propietario.tipos.map(tipo => store.tipos.find(t => t._id === tipo)?.nombre).join(', ')}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Button component={Link} to="/propietarios/nuevo" variant="contained" color="primary">
        Agregar Nuevo Propietario
      </Button>

      <br />

      <Button component={Link} to="/" variant="outlined" color="secondary">
        Volver a la Página Principal
      </Button>
    </div>
  );
};

export default PropietariosPage;
