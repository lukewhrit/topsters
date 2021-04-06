/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { useStore } from '../lib/store';
import { tw } from 'twind';

export default function Home() {
  const { albums, setAlbum } = useStore();

  return (
    <main>
      <section className={tw`grid grid-cols-5 grid-rows-5 gap-1 max-w-xl`}>
        {new Array(5 * 5).fill(0).map((_, i) => {
          const album = albums[i];

          return (
            <div key={i.toString()}>
              <img
                src={album}
                width={150}
                id={i.toString()}
                onClick={(e) => {
                  e.preventDefault();

                  if (album === 'https://via.placeholder.com/300/FF0000/FFFFFF') {
                    setAlbum(i, 'https://via.placeholder.com/300');
                  } else if (album === 'https://via.placeholder.com/300') {
                    setAlbum(i, 'https://via.placeholder.com/300/FF0000/FFFFFF');
                  }
                }}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
