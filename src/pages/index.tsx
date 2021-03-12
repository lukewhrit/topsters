/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react'
import { tw } from 'twind';

export default function Home() {
  const cols = 5;
  const rows = 5;
  const [albums, setAlbums] = useState(new Array(cols * rows).fill('https://via.placeholder.com/300'));

  return (
    <main>
      <section className={tw`grid grid-cols-5 grid-rows-5 gap-1 max-w-xl`}>
        {new Array(cols * rows).fill(0).map((_, i) => (
          <div className={tw``} key={i.toString()}>
            <img
              src={albums[i]}
              width={150}
              id={i.toString()}
              onClick={(e) => {
                e.preventDefault();
                setAlbums(albumsArray => {
                  return [
                    albumsArray[i-1],
                    'https://via.placeholder.com/300/FF0000/FFFFFF',
                    ...albumsArray
                  ]
                })
              }}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
