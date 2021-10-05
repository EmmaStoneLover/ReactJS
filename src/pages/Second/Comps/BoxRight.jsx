import React, { useState, useEffect } from 'react'
import {
  Typography,
  Button,
  Grid,
  Box,
  LinearProgress,
} from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function BoxRight({
  setLoad,
  textMore,
  setTextMore,
  deleted,
  setDeleted,
  URL,
}) {
  async function textDelete(id) {
    try {
      const res = await (
        await fetch(`${URL}/api/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        })
      ).json()
      console.log('RES:', res)
      if (res.deleted === true) {
        setLoad((load) => load.filter((i) => i._id !== id))
        setDeleted(true)
      }
    } catch (err) {
      console.log('Не получилось удалить запись...', err)
    }
  }

  const [spinerDelete, setSpinerDelete] = useState(false)
  useEffect(() => {
    if (deleted === true) setSpinerDelete(false)
  })

  return (
    <>
      {textMore !== null ? (
        <MyBox>
          <form
            id="BoxRight"
            onSubmit={(event) => {
              event.preventDefault()
              setSpinerDelete(true)
              textDelete(textMore._id)
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography
                onClick={() => setTextMore(null)}
                style={{ cursor: 'pointer' }}
              >
                close
              </Typography>
            </Box>
            <Typography
              variant="h4"
              // style={{ wordBreak: 'break-all' }}
            >
              {textMore.text ? textMore.text : ''}
            </Typography>
            <Typography
              style={{ padding: 13, marginTop: 13, marginBottom: 13 }}
              dangerouslySetInnerHTML={{ __html: textMore.textMore }}
              contentEditable={
                deleted === null || deleted === false ? 'true' : 'false'
              }
            ></Typography>
            <Grid container justifyContent="space-between">
              <Grid item>
                {deleted === null ? <Button type="submit">Удалить</Button> : ''}
              </Grid>
              <Grid item>
                {deleted === true ? (
                  <Typography color="secondary">Удалено!</Typography>
                ) : (
                  ''
                )}
              </Grid>
            </Grid>
            {spinerDelete === true ? (
              <LinearProgress style={{ marginTop: 10 }} />
            ) : (
              ''
            )}
          </form>
        </MyBox>
      ) : (
        ''
      )}
    </>
  )
}
