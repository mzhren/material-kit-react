import React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';


function LinkCard({ link }) {
    console.log(link);
    const { title, desc, logo,url } = link;
    const [rate, setRate] = useState(4.5)
    return (
        <Card>
            <CardActionArea href={url} target="_blank">
                <CardHeader avatar={
                    <Avatar aria-label="recipe" className="avatar" src={logo}>
                        SP
                    </Avatar>
                }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    >
                </CardHeader>
                <CardContent>
                    {desc}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    precision={0.5}
                    size="small"
                    onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                />
                <Button size="small" color="primary">
                    访问
                </Button>
                <Button size="small" color="primary">
                    分享
                </Button>

            </CardActions>
        </Card>
    )
}

export default LinkCard
