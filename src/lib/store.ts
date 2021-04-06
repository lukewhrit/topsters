import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  albums: string[];
  setAlbum: (position: number, value: string) => void;
};

const useStore = create<State>(persist(
  (set, get) => ({
    albums: new Array(5 * 5).fill('https://via.placeholder.com/300'),
    setAlbum: (position, value) => set(() => {
      get().albums[position] = value;
    }),
  }),
  {
    name: 'topsters-album-store',
    getStorage: () => localStorage,
  },
));

export { useStore };
