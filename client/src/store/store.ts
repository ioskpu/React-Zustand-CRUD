import {Propietario, Marca, TipoVehiculo} from '../store/propiedades';
import {create} from 'zustand';

interface AppState {
  propietarios: Propietario[];
  marcas: Marca[];
  tipos: TipoVehiculo[];
  setMarcas: (marcas: Marca[]) => void;
  setTipos: (tipos: TipoVehiculo[]) => void;
  setPropietarios: (propietarios: Propietario[]) => void;
}

export const useStore = create<AppState>((set) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set;

  return {
  propietarios: [],
  marcas: [],
  tipos: [],  
  setMarcas: (marcas) => set({ marcas }),
  setTipos: (tipos) => set({ tipos }),
  setPropietarios: (propietarios) => set({ propietarios }),
  }
  
});
