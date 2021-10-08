// material
import { Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';

import {
    LinkList
  } from '../components/_dashboard/links';


function List() {
    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    技术博客
                </Typography>

                <LinkList />
            </Container>
        </Page>
    )
}

export default List
