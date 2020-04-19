import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';

import { useBookBl } from './useBookBl';
import { getImgUrl } from '../../core/urls';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    width: 'auto',
    height: 300,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Book(props) {
  const { book } = useBookBl(props);
  const classes = useStyles();

  if (!book) return null;

  const {
    title,
    description,
    authors,
    published,
    rate,
    categories,
    imageUrl,
  } = book;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditIcon/>
          </IconButton>
        }
        title={title}
        subheader={moment(published).format('MMMM Do YYYY')}
      />
      <CardMedia
        className={classes.media}
        image={getImgUrl(imageUrl)}
        title={title}
      />
      <CardContent>
        {description && description.map(desc => (
          <Typography variant="body2" color="textSecondary" component="p">
            &nbsp;&nbsp;&nbsp;&nbsp;
            {desc}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}