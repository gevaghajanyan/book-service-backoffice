import makeStyles from '@material-ui/core/styles/makeStyles';

export const useAddBookStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  image: {
    width: 350,
  }
}));