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

export function DocCard ({children, headline, icon, link}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <a href={link}>
                <Card>
                    <CardHeader title={icon + " " + headline}/>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </a>
        </Grid>
    );
} 

//TODO honestly, it would be great to roll this in with the one above, too
export function DocCardCTA ({children, headline, icon, cta, link}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardHeader title={icon + " " + headline}/>
                <CardContent>
                    {children}
                </CardContent>
                <CardActions>
                    <Button href={link}>{cta}</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

// TODO can we roll this into the function above with an optional parameter?
export function HighlightedDocCardCTA ({children, headline, cta, link}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardHeader title={icon + " " + headline}/>
                <CardContent>
                    {children}
                </CardContent>
                <CardActions>
                    <Button variant="contained" href={link}>{cta}</Button>
                </CardActions>
            </Card>
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
        
        // Category descriptions can only be added in sidebarsLedger.js as a customProp.description item. WHY!?
        let desc = doc?.description;
        if(item.type == "category") {
            desc = item.customProps.description;
        }

        // if the item has a call to action, make it a button
        if((!!item.customProps) && (!!item.customProps.cta)) {
            return (
            <DocCardCTA headline={item.label} icon={item.customProps ? item.customProps.icon : null} link={item.href} cta={item.customProps.cta}>
                {desc}
            </DocCardCTA>
            );
        } else {
            return (
            <DocCard headline={item.label} icon={item.customProps ? item.customProps.icon : null} link={item.href}>
                {desc}
            </DocCard>
            );
        }
    }

      )}
    </DocCardGrid>
  );
}