import React from 'react'
import { Typography, TextField, Grid } from '@material-ui/core'
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
        <Grid item xs="10">
          <Typography variant="h3">Second page</Typography>
        </Grid>
        <Grid item xs="2">
          {textMore !== null ? (
            <Typography
              onClick={() => setTextMore(null)}
              style={{ cursor: 'pointer' }}
            >
              close
            </Typography>
          ) : (
            ''
          )}
        </Grid>
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
