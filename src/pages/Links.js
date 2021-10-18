import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// material
import { Container } from '@material-ui/core';
// components
import Page from '../components/Page';

import {
    LinkList
} from '../components/_dashboard/links';

const LINK_GROUP = {
    blogs:"技术博客",
    pl:"语言框架",
    sns:"圈子社区",
    game3c:"数码娱乐",
    tool:"工具软件",
    online:"在线工具",
    resources:"资源教程",
    ereading:"电子阅读",
    design:"设计图标"
}


function Links() {
    const { slug } = useParams()

    const [sites, setSites] = useState([])

    const pageTitle = `${LINK_GROUP[slug]} | StartPage.site`;

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
        <Page title={pageTitle}>
            <Container maxWidth="xl">
               

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
