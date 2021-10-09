import React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, IconButton, Typography, Chip,Grid } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';

const contentStyle = {
    height: '50px',
    overflow: "hidden",
    lineHeight: "25px",
    maxheight: "50px"
}

const headerTitleStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "80%"
}


function LinkCard({ link }) {
    console.log(link);
    const { title, desc, logo, url, tags } = link;
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
                    title={
                        <Typography gutterBottom variant="h5" component="h3" style={headerTitleStyle}>
                            {title}
                        </Typography>
                    }
                >
                </CardHeader>
                <CardContent>
                    <Typography style={contentStyle}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container spacing={3} display="flex">
                    <Grid item ml={1}>
                        {
                            tags.map((tag, k) => (
                                <Chip size="small" label={tag} key={k} variant="outlined" clickable />
                            ))
                        }
                    </Grid>
                    <Grid item>
                        <Rating
                            name="simple-controlled"
                            value={rate}
                            precision={0.5}
                            size="small"
                            onChange={(event, newValue) => {
                                setRate(newValue);
                            }}
                        />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default LinkCard
