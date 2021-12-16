import React from 'react'
// material
import { Box, Grid, Card, CardHeader, CardContent } from '@material-ui/core';

function AppOfficialAccount() {
    return (
        <Card>
        <CardHeader title="关注 码中人" />
        <CardContent>
          <Grid container spacing={2}>
           <Box 
           component="img"
           src="/static/mzhren-wxgzh.png"
           />
          </Grid>
        </CardContent>
      </Card>
    )
}

export default AppOfficialAccount
