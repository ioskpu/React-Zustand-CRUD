import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MarcaForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post('/api/marcas', {
        nombre,
        descripcion,
      });

      //redirigir a la página de marcas
      navigate('/marcas');
    } catch (error) {
      console.error('Error al agregar una nueva marca', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Marca</h2>
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
        <button type="submit">Guardar Marca</button>
      </form>
      <br />
      <Link to="/marcas">Volver a Marcas</Link>
    </div>
  );
};

export default MarcaForm;
