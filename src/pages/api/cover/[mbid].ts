/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { NextApiRequest, NextApiResponse } from 'next'

// This route would retrieve an image from the MusicBrainz Cover API via the
// provided [mbid], and then, after receiving it the image would be resized to
// around 300x300.

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (req.method) {
    case 'GET': {
      res.status(501).json({
        message: 'Route not yet implemented.'
      })
    }
    default:
      res.status(400).end();
      break;
  }
}
