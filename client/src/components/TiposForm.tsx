import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TipoForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post('/api/tipos', {
        nombre,
        descripcion,
      });

      //redirigir a la página de tipos
      navigate('/tipos');
    } catch (error) {
      console.error('Error al agregar un nuevo tipo', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Tipo de Vehículo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        </label>
        <br />
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        </label>
        <br />
        <button type="submit">Guardar Tipo</button>
      </form>
      <br />
      <Link to="/tipos">Volver a Tipos</Link>
    </div>
  );
};

export default TipoForm;
