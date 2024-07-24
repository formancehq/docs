import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { graphviz } from "d3-graphviz";

const PostingsGraph = ({ postings, caption, additionnals =[] }) => {
  const graph : string[] = [];

  postings.map((posting) => {
    const splitSource = posting.source.split(':');
    const splitDest = posting.destination.split(':');
    let source = posting.source;
    let destination = posting.destination;

    // Dot language is escaping semicolon from label.
    // To use semicolon as label we need to use dot special char <> encoding
    source = `<${posting.source}>`;
    destination = `<${posting.destination}>`;

    const fillcolor = posting.fillcolor || 'white';
    const color = posting.color || 'black';
    const style = posting.style || 'solid';

    const shape = posting.shape || 'ellipse';

    graph.push(`${source} [
      label="${posting.source}"
      shape="${shape}"
      fillcolor="${fillcolor}"
    ];`);

    graph.push(`${destination} [
      label="${posting.destination}"
      shape="${shape}"
      fillcolor="${fillcolor}"
    ];`);

    graph.push(`${source} -> ${destination} [
      label="${posting.asset} ${posting.amount}",
      weight="${posting.amount}",
      color="${color}",
      style="${style}",
    ];`);

    for (let additional of additionnals) {
      const color = additional.color || 'black';
      const style = additional.style || 'solid';

      graph.push(`<${additional.from}> -> <${additional.to}> [
        label="${additional.label || ''}",
        color="${color}",
        style="${style}",
      ];`);
    }
  });

  const dot = `digraph {\nrankdir=LR\n${graph.join('\n')}\n}`;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(ref.current) {
      graphviz(ref.current, { fit: true, width: 700, height: 300, useWorker: true, zoom: false }).renderDot(dot);
    }
  }, [ref])

  return (
    <Box sx={{
      textAlign: 'center',
      // border: '1px solid',
      // borderRadius: 2,
      // borderColor: 'grey.200',
      mt: 2,
      mb: 2,
    }}>
      <div className="Graph" ref={ref}></div>
      <Box sx={{
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'italic',
        color: 'grey.500',
        mt: 1,
        mb: 1,
        pl: 2,
      }}>
        {caption}
      </Box>
    </Box>
  );
};

export {
  PostingsGraph,
};
