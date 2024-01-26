import create from 'zustand';

const useMarcaStore = create((set) => ({
  marcas: [],
  setMarcas: (nuevasMarcas) => set({ marcas: nuevasMarcas }),
}));

export default useMarcaStore;
