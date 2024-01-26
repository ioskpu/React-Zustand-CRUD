import create from 'zustand';

interface AppState {
  propietarios: Propietario[];
  marcas: Marca[];
  tipos: TipoVehiculo[];
}

export const useStore = create<AppState>((set) => ({
  propietarios: [],
  marcas: [],
  tipos: [],
}));
