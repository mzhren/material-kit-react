import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// material
import { Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';

import {
    LinkList
} from '../components/_dashboard/links';


function Links() {
    console.log('slug changed')
    const { slug } = useParams()
    console.log(slug)

    const [sites, setSites] = useState([])

    useEffect(() => {
        let list_data_url = document.location.origin + '/data/home.json';
        if (slug) {
            list_data_url = document.location.origin + '/data/' + slug + '.json';
        }
        fetch(list_data_url).then((response) => {
            return response.json();
        })
            .then((myJson) => {
                console.log(myJson);
                setSites(myJson)
            });
    }, [slug]);
    return (
        <Page title="Dashboard: Products | Minimal-UI">
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    技术博客
                </Typography>

                {
                    sites.map((list,k) => (
                        <LinkList links={list.sites} name={list.name} key={k} />
                    ))
                }

            </Container>
        </Page>
    )
}

export default Links
