import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { useBookBl } from './useBookBl';
import { useBookStyles } from './useBookStyles';

import { getFileUrl } from '../../core/urls';

export default function Book(props) {
  const { book } = useBookBl(props);
  const classes = useBookStyles();

  if (!book) return null;

  const {
    title,
    description,
    authors,
    published,
    rate,
    categories,
    shortDescription,
    longDescription,
    file,
    image,
  } = book;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {authors && authors[0][0]}
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
      <Grid container>
        <Grid item xs={2} p={2}>
          <img
            className={classes.media}
            src={getFileUrl(image)}
            title={title}
          />
        </Grid>
        <Grid item xs={10}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Short Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {shortDescription}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Long Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <div dangerouslySetInnerHTML={{ __html: longDescription }}/>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      <CardContent>
        {description && description.map(desc => (
          <Typography variant="body2" color="textSecondary" component="p">
            &nbsp;&nbsp;&nbsp;&nbsp;
            {desc}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <a
          href={getFileUrl(file)}
          download
          target='_blank'
        >
          <IconButton aria-label="download">
            <CloudDownloadIcon/>
          </IconButton>
        </a>
      </CardActions>
    </Card>
  );
}
