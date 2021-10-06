import React from 'react'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider, Paper } from '@material-ui/core'
import {
  green,
  purple,
  orange,
  blue,
  indigo,
  cyan,
  lime,
  pink,
  red,
} from '@material-ui/core/colors'

export const contrast = 300
export const firstColor = red[contrast]
export const firstDarkMode = false

export const contrastColors = [
  { color: pink[contrast], title: 'pink', checked: salae },
  { color: green[contrast], title: 'green', checked: false },
  { color: purple[contrast], title: 'purple', checked: false },
  { color: orange[contrast], title: 'orange', checked: false },
  { color: blue[contrast], title: 'blue', checked: false },
  { color: indigo[contrast], title: 'indigo', checked: false },
  { color: red[contrast], title: 'red', checked: true },
  { color: cyan[contrast], title: 'cyan', checked: false },
  { color: lime[contrast], title: 'lime', checked: false },
]

export default function MyTheme({ children, darkMode, primaryMod }) {
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: primaryMod,
      },
    },
    border: 12,
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper square>{children}</Paper>
    </ThemeProvider>
  )
}
