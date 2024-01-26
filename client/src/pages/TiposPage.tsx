//import { TipoVehiculo } from './tipos';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';

const TiposPage: React.FC = () => {
  const store = useStore();

  useEffect(() => {
    //obtener tipos desde el servidor
    axios.get('/api/tipos')
      .then(response => store.setTipos(response.data))
      .catch(error => console.error('Error al obtener tipos', error));
  }, [store]);

  return (
    <div>
      <h2>Tipos de Vehículos</h2>
      <ul>
        {store.tipos.map(tipo => (
          <li key={tipo._id}>
            <strong>{tipo.nombre}</strong> - {tipo.descripcion}
          </li>
        ))}
      </ul>
      <Link to="/tipos/nuevo">Agregar Nuevo Tipo</Link>
      <br />
      <Link to="/">Volver a la Página Principal</Link>
    </div>
  );
};

export default TiposPage;
