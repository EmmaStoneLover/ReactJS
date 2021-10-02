import React from 'react'
import { Typography, TextField, Grid, Box } from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function InputSecond({
  setLoad,
  textInput,
  setTextInput,
  textMore,
  setTextMore,
  URL,
}) {
  async function textFetchApi() {
    setTextInput('')
    const text = {
      text: textInput,
    }
    const res = await (
      await fetch(`${URL}/api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(text),
      })
    ).json()
    console.log(res)
    setLoad(res.DB)
  }

  return (
    <MyBox>
      <Grid container justifyContent="space-between">
        <Typography variant="h3">Second page</Typography>
      </Grid>
      <br />
      <MyBox>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            textFetchApi()
          }}
        >
          <TextField
            fullWidth
            label="Вставить текст"
            variant="outlined"
            value={textInput}
            onChange={(event) => {
              setTextInput(event.target.value)
            }}
          />
        </form>
      </MyBox>
    </MyBox>
  )
}
