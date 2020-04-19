import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LinearProgress from '@material-ui/core/LinearProgress';

import { mainListItems, secondaryListItems } from './listItems';
import { useDashboardStyles } from './useDashboardStyles';

const Users = lazy(() => import('../Users/Users'));
const Books = lazy(() => import('../Books/Books'));
const Categories = lazy(() => import('../Categories/Categories'));
const Book = lazy(() => import('../Book/Book'));
const EditBook = lazy(() => import('../EditBook/EditBook'));
const AddBook = lazy(() => import('../AddBook/AddBook'));

export default function Dashboard() {
  const classes = useDashboardStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>{mainListItems}</List>
        <Divider/>
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Suspense fallback={(<LinearProgress />)}>
              <Route path='/books' component={Books}/>
              <Route path='/users' component={Users}/>
              <Route path='/categories' component={Categories}/>
              <Route path='/book/add' component={AddBook}/>
              <Route exact path='/book/:bookId' component={Book}/>
              <Route exact path='/book/:bookId/edit' component={EditBook}/>
              <Route path='/' component={null}/>
            </Suspense>
          </Switch>
        </Container>
      </main>
    </div>
  );
}