/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AppProps } from 'next/app'
import Head from 'next/head'
import { setup } from 'twind'
import * as colors from 'twind/colors';

export default function App({ Component, pageProps }: AppProps) {
  setup({
    darkMode: 'media',
    theme: {
      colors,
    }
  });

  return (
    <>
      <Head>
        <title>Topsters</title>

        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
