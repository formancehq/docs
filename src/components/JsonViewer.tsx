import React from 'react';
import ReactJson from 'react-json-view';

export default function JsonViewer({ data, theme = 'ocean' }) {
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
