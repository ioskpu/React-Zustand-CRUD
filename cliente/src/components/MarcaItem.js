import React from 'react';
import { Link } from 'react-router-dom';

const MarcaItem = ({ marca }) => {
  return (
    <li>
      <Link to={`/marcas/${marca._id}`}>{marca.nombre}</Link>
    </li>
  );
};

export default MarcaItem;
