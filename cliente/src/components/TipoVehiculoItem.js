import React from 'react';
import { Link } from 'react-router-dom';

const TipoVehiculoItem = ({ tipo }) => {
  return (
    <li>
      <Link to={`/tipos/${tipo._id}`}>{tipo.nombre}</Link>
    </li>
  );
};

export default TipoVehiculoItem;
