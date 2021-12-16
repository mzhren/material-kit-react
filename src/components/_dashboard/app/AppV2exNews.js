import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { useState, useEffect } from 'react';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
import Scrollbar from '../../Scrollbar';


// function getJSON() {

//     let url = 'https://cdn.jsdelivr.net/gh/v2hot/v2hot.github.io@data/v2ex-api/hot-topics.json';

//     const newsData = fetch(url).then((response) => response.json())
//         .then((data) => {
//             return data.posts;
//         });

//     const getNews = async () => {
//         const news = await newsData;
//         return news;
//     };

//     let n = getNews();

//     return n;

// }

// const jsonPromise = getJSON();
// console.log(jsonPromise);

// const NEWS = getJSON();
// console.log(NEWS);

// ----------------------------------------------------------------------

NewsItem.propTypes = {
    news: PropTypes.object.isRequired
};


function NewsItem({ news }) {
    const { url, node, title, content: description, created } = news;
    const image = node.avatar_min || node.avatar_large || node.normal;
    const postedAt = new Date(created * 1000);


    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                alt={title}
                src={image}
                onError={e => {
                    e.target.src = "/static/logo.png";
                  }}
                sx={{ width: 48, height: 48, borderRadius: 1.5 }}
            />
            <Box sx={{ minWidth: 240 }}>
                <Link href={url} target="_blank" color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {title}
                    </Typography>
                </Link>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {description}
                </Typography>
            </Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                { format(postedAt,'yyyy/mm/dd') }
            </Typography>
        </Stack>
    );
}

// function NewsItem2({ news }) {
//     const { image, title, description, postedAt } = news;

//     return (
//         <Stack direction="row" alignItems="center" spacing={2}>
//             <Box
//                 component="img"
//                 alt={title}
//                 src={image}
//                 sx={{ width: 48, height: 48, borderRadius: 1.5 }}
//             />
//             <Box sx={{ minWidth: 240 }}>
//                 <Link to="#" color="inherit" underline="hover" component={RouterLink}>
//                     <Typography variant="subtitle2" noWrap>
//                         {title}
//                     </Typography>
//                 </Link>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
//                     {description}
//                 </Typography>
//             </Box>
//             <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
//                 {formatDistance(postedAt, new Date())}
//             </Typography>
//         </Stack>
//     );
// }

export default function AppV2exNews() {
    const [newsList, setNewsList] = useState([]);
    let url = 'https://cdn.jsdelivr.net/gh/v2hot/v2hot.github.io@data/v2ex-api/hot-topics.json';
    useEffect(() => {

        fetch(url).then((response) => response.json())
            .then((data) => {
                console.log(data.posts);
                setNewsList(data.posts)
            });

    }, [url])
    return (
        <Card>
            <CardHeader title="V2ex热帖" />

            <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                    {newsList.map((news) => (
                        <NewsItem key={news.title} news={news} />
                    ))}
                </Stack>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 2, textAlign: 'right' }}>
                <Button
                    to="#"
                    size="small"
                    color="inherit"
                    component={RouterLink}
                    endIcon={<Icon icon={arrowIosForwardFill} />}
                >
                    View all
                </Button>
            </Box>
        </Card>
    );
}