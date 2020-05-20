import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useBookStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    width: 'auto',
    height: 300,
    margin: '0 auto',
    padding: 10,
    display: 'block',
    boxSizing: 'border-box'
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
