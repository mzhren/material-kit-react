import React from 'react'
import { Grid } from '@material-ui/core';
import LinkCard from './LinkCard';

function LinkList({ name, links }) {
    console.log(links)
    return (
        <div>
            <h3>{name}</h3>
            <Grid container spacing={3} >
                {
                    links.map((item, k) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <LinkCard name={item.name} link={item} key={k} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default LinkList
