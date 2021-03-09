import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const DynamicPlayground = dynamic(() => import('../../web/components/dev/Playground'), { ssr: false });

export default function Playground(): ReactElement {
  return <DynamicPlayground />;
}
