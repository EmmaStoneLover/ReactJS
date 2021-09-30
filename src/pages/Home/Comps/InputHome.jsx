import React, { useState } from 'react'
import { TextField, Typography } from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function InputHome({ textDay, setTextDay }) {
  const [change, setChange] = useState(true)

  return (
    <>
      {change ? (
        <form
          onClick={() => {
            setChange((prev) => !prev)
          }}
        >
          <MyBox pad="32px">
            <Typography
              variant="h5"
              style={{ marginTop: '4px', marginBottom: '4px' }}
            >
              {textDay ? (
                textDay
              ) : (
                <text style={{ color: 'darkgrey' }}>Вставить текст</text>
              )}
            </Typography>
          </MyBox>
        </form>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setChange((prev) => !prev)
          }}
          // onPointerLeave={() => {
          //   setChange((prev) => !prev)
          // }}
        >
          <MyBox>
            <TextField
              value={textDay}
              onChange={(event) => {
                if (event.target.value.length < 14) {
                  setTextDay(event.target.value)
                }
              }}
              fullWidth
              variant="outlined"
              label="Вставить текст"
            />
          </MyBox>
        </form>
      )}
    </>
  )
}
