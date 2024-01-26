
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../store/store';


const PropietarioForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [paisResidencia, setPaisResidencia] = useState('');
  const [marcas, setMarcas] = useState<string[]>([]);
  const [tipos, setTipos] = useState<string[]>([]);
  const store = useStore();
  const navigate = useNavigate();

  const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarcas(Array.from(event.target.selectedOptions, option => option.value));
  };

  const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipos(Array.from(event.target.selectedOptions, option => option.value));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post('/api/propietarios', {
        nombre,
        apellido,
        paisResidencia,
        marcas,
        tipos,
      });

      

      //redirigir a la página de propietarios
      navigate('/propietarios');
    } catch (error) {
      console.error('Error al agregar un nuevo propietario', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Propietario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} required />
        </label>
        <br />
        <label>
          País de Residencia:
          <input type="text" value={paisResidencia} onChange={(event) => setPaisResidencia(event.target.value)} required />
        </label>
        <br />
        <label>
          Marcas:
          <select multiple onChange={handleMarcaChange}>
            {store.marcas.map(marca => (
              <option key={marca._id} value={marca._id}>{marca.nombre}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Tipos de Vehículos:
          <select multiple onChange={handleTipoChange}>
            {store.tipos.map(tipo => (
              <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Guardar Propietario</button>
      </form>
      <br />
      <Link to="/propietarios">Volver a Propietarios</Link>
    </div>
  );
};

export default PropietarioForm;
