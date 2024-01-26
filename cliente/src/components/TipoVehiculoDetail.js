import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipoVehiculoDetail = ({ match }) => {
  const [tipo, setTipo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tipos/${match.params.id}`)
      .then(response => setTipo(response.data))
      .catch(error => console.error('Error al obtener detalles del tipo de vehículo:', error));
  }, [match.params.id]);

  return (
    <div>
      <h2>Detalles del Tipo de Vehículo</h2>
      <p><strong>Nombre:</strong> {tipo.nombre}</p>
      <p><strong>Descripción:</strong> {tipo.descripcion}</p>
    </div>
  );
};

export default TipoVehiculoDetail;
