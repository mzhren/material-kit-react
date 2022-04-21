import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

// material
import { Container,Backdrop,CircularProgress } from '@material-ui/core';
// components
import Page from '../components/Page';

import {
    LinkList
} from '../components/_dashboard/links';

const LINK_GROUP = {
    blogs: "技术博客",
    pl: "语言框架",
    sns: "圈子社区",
    game3c: "数码娱乐",
    tool: "工具软件",
    online: "在线工具",
    weekly: "周刊头条",
    docs: "文档教程",
    video: "视频教程",
    resources: "素材资源",
    ereading: "电子阅读",
    design: "设计图标",
    programminggame:"编程游戏",
    wemedia: "自媒体",
    fish: "摸鱼专区",
    itnews:"信息聚合"
}

const backdropStyle = {
    background:"rgba(0, 0, 0, 0.1)"
}


function Links() {
    const { slug } = useParams()

    const [sites, setSites] = useState([])

    const [loading, setLoading] = useState(false);

    const pageTitle = `${LINK_GROUP[slug]} | StartPage.site`;

    const handleClose = ()=>{
        setLoading(false);
    }

    useEffect(() => {
        let list_data_url = document.location.origin + '/data/home.json';
        if (slug) {
            list_data_url = document.location.origin + '/data/' + slug + '.json';
        }
        fetch(list_data_url).then((response) => {
            setLoading(true);
            return response.json();
        })
            .then((myJson) => {
                console.log(myJson);
                setSites(myJson)
                setLoading(false);
            });
    }, [slug]);
    return (
        <Page title={pageTitle}>
            <Container maxWidth="xl">
                {
                    sites.map((list, k) => (
                        <LinkList links={list.sites} name={list.name} key={k} />
                    ))
                }
            </Container>
            <Backdrop open={loading} style={backdropStyle} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Page>
    )
}

export default Links
