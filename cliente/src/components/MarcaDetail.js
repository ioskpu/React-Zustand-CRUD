import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarcaDetail = ({ match }) => {
  const [marca, setMarca] = useState({});

  useEffect(() => {
    //obtener detalles de la marca al cargar el componente
    axios.get(`http://localhost:5000/api/marcas/${match.params.id}`)
      .then(response => setMarca(response.data))
      .catch(error => console.error('Error al obtener detalles de la marca:', error));
  }, [match.params.id]);

  return (
    <div>
      <h2>Detalles de la Marca</h2>
      <p><strong>Nombre:</strong> {marca.nombre}</p>
      <p><strong>Descripción:</strong> {marca.descripcion}</p>
    </div>
  );
};

export default MarcaDetail;
