import React, { useState } from 'react';
import axios from 'axios';

const TipoVehiculoForm = ({ history, match }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/tipos', {
        nombre,
        descripcion,
      });

      history.push('/tipos');
    } catch (error) {
      console.error('Error al agregar o editar el tipo de vehículo:', error);
    }
  };

  return (
    <div>
      <h2>{match.params.id ? 'Editar Tipo de Vehículo' : 'Agregar Nuevo Tipo de Vehículo'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        <br />
        <label>Descripción:
          <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default TipoVehiculoForm;
