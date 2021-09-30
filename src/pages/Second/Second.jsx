import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import BoxRight from './Comps/BoxRight'
import InputSecond from './Comps/InputSecond'
import TextAll from './Comps/TextAll'

const URL = 'http://localhost:8000'

export default function Second() {
  const [load, setLoad] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        var response = 'hi'
        response = await (await fetch(`${URL}/api/`)).json()
        setLoad(response.DB)
      } catch {
        setLoad(console.log('Ошибка с соединением...'))
      }
    }
    fetchData()
  }, [])

  const [textMore, setTextMore] = useState(null)
  const [textInput, setTextInput] = useState('')

  const [deleted, setDeleted] = useState(null)

  return (
    <Container>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid
          item
          container
          spacing={2}
          xs={12}
          md={textMore === null ? 12 : 5}
        >
          <Grid item xs={12} md={textMore === null ? 6 : 12}>
            <InputSecond
              load={load}
              setLoad={setLoad}
              textInput={textInput}
              setTextInput={setTextInput}
              textMore={textMore}
              setTextMore={setTextMore}
              URL={URL}
            />
          </Grid>
          <Grid item xs={12} md={textMore === null ? 6 : 12}>
            <TextAll
              load={load}
              setTextMore={setTextMore}
              setDeleted={setDeleted}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={textMore === null ? null : 7}>
          <BoxRight
            setLoad={setLoad}
            textMore={textMore}
            setTextMore={setTextMore}
            deleted={deleted}
            setDeleted={setDeleted}
            URL={URL}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
