import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bB: { borderRadius: theme.border },
}))

export default function MyBox({ children, pos, p, mb, shadow, w, cl }) {
  const classes = useStyles()
  return (
    <Box
      className={`${classes.bB} ${cl}`}
      textAlign={pos}
      boxShadow={shadow ? shadow : 7}
      padding={p ? p : 3}
      width={w ? w : 'auto'}
      style={{
        overflow: 'hidden',
        marginBottom: mb ? mb : 5,
      }}
    >
      {children}
    </Box>
  )
}
