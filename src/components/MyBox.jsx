import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bB: {
    borderRadius: theme.border,
  },
}))

export default function MyBox({ children, pos, p, mb }) {
  const classes = useStyles()

  return (
    <Box
      textAlign={pos}
      // boxShadow="22px 22px 44px -25px rgba(0, 0, 0, 0.48), -43px -40px 55px -67px rgba(255, 255, 255, 0.3)"
      boxShadow={7}
      padding={p ? p : 3}
      style={{
        overflow: 'hidden',
        marginBottom: mb ? mb : 5,
      }}
      className={classes.bB}
    >
      {children}
    </Box>
  )
}
