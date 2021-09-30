import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: 'rgba(0, 0, 0, 0.87)',
    padding: 20,
    boxShadow: theme.shadows[10],
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <Box id="footer" className={classes.footer}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={5}
      >
        <Grid item>
          <Typography variant="h4">SimpleDimple</Typography>
          <Typography> text, text text, text text, text </Typography>
        </Grid>
        <Grid item>
          <Typography>Text, text, text text, text</Typography>
          <Typography variant="h5">No, PopIt</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
