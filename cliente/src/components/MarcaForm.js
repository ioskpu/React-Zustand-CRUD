import React, { useState }from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const MarcaForm = ({ history, match }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // solicitud al servidor para agregar o editar la marca
      const response = await axios.post('http://localhost:5000/api/marcas', {
        nombre,
        descripcion,
      });

      //redirigir a la lista de marcas después de la operación
      history.push('/marcas');
    } catch (error) {
      console.error('Error al agregar o editar la marca:', error);
    }
  };

  return (
    <div>
      <h2>{match.params.id ? 'Editar Marca' : 'Agregar Nueva Marca'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <TextField
          label="Descripción"
          variant="outlined"
          multiline
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default MarcaForm;
