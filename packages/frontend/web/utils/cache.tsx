import React, { ReactElement } from 'react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';

const cache = createCache({ key: 'css', prepend: true });
export const { extractCritical } = createEmotionServer(cache);

type Props = {
  children: null | ReactElement | ReactElement[];
};

const CacheProvider = ({ children }: Props): ReactElement => (
  <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>
);

export default CacheProvider;
