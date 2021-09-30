import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import CheckIcon from '@material-ui/icons/Check'
import { contrastColors } from '../MyTheme'

const drawerWidth = 200

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
  },
}))

export default function SidBar({
  sideBar,
  setSideBar,
  setPrimaryMod,
  darkMode,
  setDarkMode,
}) {
  const classes = useStyles()

  const [themeColors, useThemeColors] = useState(contrastColors)

  function ChangeThemeColor(color) {
    useThemeColors(
      themeColors.map((i) => {
        if (i.checked) {
          i.checked = false
        }
        if (i.color === color) {
          i.checked = true
        }
        return i
      })
    )
  }

  return (
    <Drawer
      className={classes.drawer}
      // variant="persistent"
      anchor="left"
      open={sideBar}
      onClose={() => setSideBar(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton
          onClick={() => {
            setSideBar(false)
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <List>
        <ListItem>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(event) => {
                  setDarkMode(event.target.checked)
                }}
                name="checkedA"
              />
            }
            label="Dark mode"
          />
        </ListItem>

        {themeColors.map((item) => {
          return (
            <ListItem
              button
              key={item.color}
              onClick={() => {
                setPrimaryMod(item.color)
                ChangeThemeColor(item.color)
              }}
            >
              <ListItemText primary={item.title} />
              {item.checked ? <CheckIcon color="primary" /> : ''}
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}
