import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TipoVehiculoItem from './TipoVehiculoItem';

const TipoVehiculoList = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tipos')
      .then(response => setTipos(response.data))
      .catch(error => console.error('Error al obtener tipos:', error));
  }, []);

  return (
    <div>
      <h2>Tipos de Vehículos</h2>
      <ul>
        {tipos.map(tipo => (
          <TipoVehiculoItem key={tipo._id} tipo={tipo} />
        ))}
      </ul>
    </div>
  );
};

export default TipoVehiculoList;
