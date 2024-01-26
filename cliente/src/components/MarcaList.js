import React, { useEffect } from 'react';
import axios from 'axios';
import useMarcaStore from '../store/store';

const MarcaList = () => {
    const {marcas, setMarcas} = useMarcaStore();

    useEffect(() => {
        //obtener lista de marcas
        axios.get('http://localhost:5000/api/marcas')
        .then (response => setMarcas(response.data))
        .catch(error => console.error('Error al obtener las marcas', error))
    }, [setMarcas]);

    return (        
        <div>
            <h2>Lista de marcas de Vehículos</h2>
            <ul>                
                {marcas.map(marca => (
                    <li key={marca._id}>
                        {marca.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default MarcaList;
