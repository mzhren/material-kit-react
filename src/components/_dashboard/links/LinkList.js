import React from 'react'
import { Grid,Typography} from '@material-ui/core';
import LinkCard from './LinkCard';

function LinkList({ name, links }) {
    return (
        <div>
             <Typography variant="h4" mb={2} mt={2} ml={1}>
                    {name}
                </Typography>
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
