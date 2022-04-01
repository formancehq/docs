import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

export function DocCardGrid ({children}) {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    );
}

export function DocCard ({children, headline, cta, link}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardHeader title={headline}/>
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
export function HighlightedDocCard ({children, headline, cta, link}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardHeader title={headline}/>
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