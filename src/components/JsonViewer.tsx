import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function JsonViewer({ data, theme = 'ocean' }) {
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    const ReactJson = require('react-json-view').default;
    return (
      <ReactJson 
        src={data}
        theme={theme}
        displayDataTypes={false}
        collapsed={1}
        name={false}
        indentWidth={2}
      />
    );
  }

  return <div>Loading...</div>;
}
