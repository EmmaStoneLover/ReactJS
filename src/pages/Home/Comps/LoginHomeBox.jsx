import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MyBox from '../../../components/MyBox'

const LoginHomeBox = () => {
  return (
    <MyBox>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs="4">
          <Link to="/login" style={{ textDecoration: 'none' }} exact="true">
            <Button
              color="primary"
              variant="contained"
              style={{
                marginBottom: 6,
              }}
            >
              Login
            </Button>
          </Link>
        </Grid>
        {localStorage.token ? (
          <Grid item xs="8">
            <MyBox>
              <Typography variant="h6" style={{ textAlign: 'end' }}>
                {localStorage.username}
              </Typography>
            </MyBox>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </MyBox>
  )
}

export default LoginHomeBox
