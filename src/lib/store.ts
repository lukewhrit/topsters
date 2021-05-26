/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

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
