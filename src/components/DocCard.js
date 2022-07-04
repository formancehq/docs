import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import {findFirstCategoryLink, useDocById} from '@docusaurus/theme-common';


export function DocCardGrid ({children}) {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    );
}

export function DocCard ({children, headline, icon, link, cta, highlight}) {

    var title = headline;
    if(!!icon)
        title = icon + " " + headline;

    let button;

    let buttonstyle = 'outlined'
    if(!!highlight) {
        buttonstyle = 'contained'
    }

    if(cta) {
        button = <CardActions>
                    <Button variant={buttonstyle} href={link}>{cta}</Button>
                 </CardActions>
    }

    let card = <Card>
                    <CardHeader title={title}/>
                    <CardContent>
                        {children}
                    </CardContent>
                    {button}
                </Card>

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
            <DocCard headline={item.label}
                     icon={item.customProps ? item.customProps.icon : null}
                     link={item.href}
                     cta={item.customProps ? item.customProps.cta : null}>
                {desc}
            </DocCard>
            );
        }

      )}
    </DocCardGrid>
  );
}