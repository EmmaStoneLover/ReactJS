import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Home from './pages/Home/Home'
import Second from './pages/Second/Second'
import Login from './pages/Auth/Login'

export default function MyRoutes({ setPrimaryMod, textDay, setTextDay, URL }) {
  return (
    <div id="router">
      <Switch>
        <Route path="/" exact>
          <Paper elevation={0}>
            <Home
              setPrimaryMod={setPrimaryMod}
              textDay={textDay}
              setTextDay={setTextDay}
            />
          </Paper>
        </Route>
        <Route path="/second" exact>
          <Paper elevation={0}>
            <Second setPrimaryMod={setPrimaryMod} URL={URL} />
          </Paper>
        </Route>
        <Route path="/login" exact>
          <Paper elevation={0}>
            <Login URL={URL} />
          </Paper>
        </Route>
      </Switch>
    </div>
  )
}
