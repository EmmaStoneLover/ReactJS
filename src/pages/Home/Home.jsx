import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core'
import InputChange from './Comps/InputHome'
import MousePointer from './Comps/MousePointer'
import AddText from './Comps/AddText'
import MyBox from '../../components/MyBox'
import { Link } from 'react-router-dom'

export default function Home({ textDay, setTextDay }) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MyBox>
            <Typography variant="h3" style={{ marginBottom: 25 }}>
              Home page
            </Typography>
            <InputChange textDay={textDay} setTextDay={setTextDay} />
            <Link to="/login" style={{ textDecoration: 'none' }} exact="true">
              <br />
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 15 }}
              >
                Login
              </Button>
              {localStorage.token ? (
                <Typography variant="p">{localStorage.username}</Typography>
              ) : (
                ''
              )}
            </Link>
          </MyBox>
        </Grid>
        <Grid item xs={12} md={7}>
          <MyBox>
            <AddText />
          </MyBox>
        </Grid>
        <Grid item xs={12} md={1}>
          <MousePointer />
        </Grid>
      </Grid>
    </Container>
  )
}
