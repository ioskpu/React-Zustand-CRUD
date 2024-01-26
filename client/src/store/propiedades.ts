export interface Propietario {
    
    _id: string;
    nombre: string;
    apellido: string;
    paisResidencia: string;
    marcas: string[];
    tipos: string[];
   
  }

  export interface Marca {
    
    _id: string;
    nombre: string;
    descripcion: string;
   
  }

  export interface TipoVehiculo {
    
    _id: string;
    nombre: string;
    descripcion: string;
    
  }