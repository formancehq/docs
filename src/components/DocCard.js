import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import {findFirstCategoryLink, useDocById} from '@docusaurus/theme-common/internal';


export function DocCardGrid({children}) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}

function Card({title, cta, children}) {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: `solid 1px var(--ifm-color-secondary)`,
      borderRadius: 2,
    }}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">{children}</div>
      {cta && (
        <div className="card__footer">
          <a class="button button--secondary button--block" href={cta.link}>{cta.text}</a>
        </div>
      )}
    </Box>
  );
}

export function DocCard({children, headline, icon, link, cta, highlight}) {
  var title = headline;
  if(!!icon)
    title = icon + " " + headline;

  let buttonstyle = 'outlined'
  if(!!highlight) {
    buttonstyle = 'contained'
  }

  let card = (
    <Card title={title} cta={{
      text: cta,
      link: link,
    }}>
      {children}
    </Card>
  );

  if(!cta) {
    card = <a href={link}>
      {card}
    </a>
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      {card}
    </Grid>
  );
}

// Filter categories that don't have a link.
function filterItems(items) {
  return items.filter((item) => {
    if (item.type === 'category') {
      return !!findFirstCategoryLink(item);
    }
    return true;
  });
}

export function DocCardList({items}) {
  return (
    <DocCardGrid>
      {filterItems(items).map((item, index) => {
        const doc = useDocById(item.docId ?? undefined);

        // Category descriptions and any CTAs and icons can only be added in sidebarsLedger.js as a customProp.description item. WHY!?
        let desc = doc ? doc.description : '';
        if(item.type == "category") {
          desc = item.customProps ? item.customProps.description : '';
        }

        return (
          <DocCard
            headline={item.label}
            icon={item.customProps ? item.customProps.icon : null}
            link={item.href}
            cta={item.customProps ? item.customProps.cta : null}>
            {desc}
          </DocCard>
        );
      })}
    </DocCardGrid>
  );
}
