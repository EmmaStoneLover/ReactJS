import React from 'react'
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  IconButton,
  makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

export default function Header({ setSideBar }) {
  const classes = useStyles()

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => setSideBar(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          SimpleDimple
        </Typography>
        <div>
          <Link to="/" exact="true" className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/second" exact="true" className={classes.link}>
            <Button color="inherit">Second</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
