import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function MousePointer() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  })
  const mouseEventListener = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }
  useEffect(() => {
    window.addEventListener('mousemove', mouseEventListener)
    return () => {
      window.removeEventListener('mousemove', mouseEventListener)
    }
  }, [])

  return (
    <MyBox pos={'center'} p={1}>
      <Typography>
        x: {pos.x} <br />
        y: {pos.y}
      </Typography>
    </MyBox>
  )
}
