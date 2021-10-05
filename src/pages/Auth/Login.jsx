import React, { useState } from 'react'
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
  LinearProgress
} from '@material-ui/core'
import MyBox from '../../components/MyBox'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  primary: { background: theme.palette.primary.main },
  secondary: { background: theme.palette.secondary.main },
}))

export default function Login({ URL }) {
  const classes = useStyles()

  const [isLogged, setIsLogged] = useState(localStorage.token)
  const [spiner, setSpiner] = useState(false)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [labelLogin, setLabelLogin] = useState({
    error: false,
    label: 'Login',
  })
  const [labelPassword, setLabelPassword] = useState({
    error: false,
    label: 'Password',
  })

  function DeleteLocalStorage() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    console.log('Удалено из localStorage:', localStorage.token)
    console.log('LocalStorage:', localStorage)
    setIsLogged(false)
  }

  async function FetchData() {
    const data = {
      username: login,
      password: password,
    }
    if (data.username.length === 0) {
      setSpiner(false)
      return setLabelLogin({ error: true, label: 'Введи хоть что-то, епта' })
    } else {
      if (data.password.length === 0) {
        setSpiner(false)
        return setLabelPassword({ error: true, label: 'Пароль забыл' })
      } else setLabelPassword({ error: false, label: 'Password' })
    }
    console.log('Отправляю:', data)
    const res = await (
      await fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          // Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(data),
      })
    ).json()
    console.log('Пришло:', res)
    if (res.userError) {
      setLabelLogin({ error: true, label: res.userError })
      setSpiner(false)
      return setLabelPassword({ error: true, label: "И пароль твой говно!" })
    } else {
      setLabelLogin({ error: false, label: 'Login' })
      setLabelPassword({ error: false, label: "Password" })
      if (res.passwordError) {
        setSpiner(false)
        return setLabelPassword({ error: true, label: res.passwordError })
      } else {
        setLabelPassword({ error: false, label: 'Password' })
        setPassword('')
        if (res.username) localStorage.setItem('username', res.username)
        if (res.token) {
          localStorage.setItem('token', res.token)
          console.log('Сохнанено в localStorage:', localStorage.token)
          console.log('LocalStorage:', localStorage)
        }
        if (localStorage.token) {
          setLogin('')
          setPassword('')
          setIsLogged(true)
        }
        setLabelLogin({ error: false, label: 'Login' })
        setLabelPassword({ error: false, label: 'Password' })
        setPassword('')
        setSpiner(false)
      }
    }
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} lg={5} xl={4}>
          <MyBox>
            {!isLogged ? (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSpiner(true)
                  FetchData()
                }}
              >
                <MyBox shadow="0">
                  <Typography variant="h4">Login</Typography>
                </MyBox>
                <br />
                <MyBox>
                  <TextField
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    error={labelLogin.error ? true : false}
                    variant="outlined"
                    label={labelLogin.label}
                    fullWidth
                  />
                  <br /> <br />
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={labelPassword.error ? true : false}
                    variant="outlined"
                    label={labelPassword.label}
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                  />
                  <br /> <br />
                  {spiner ? <LinearProgress /> : ""}
                  <br />
                  <Button type="submit" variant="contained" color="primary">
                    Войти
                  </Button>
                </MyBox>
              </form>
            ) : (
              <div>
                <Typography variant="h5">{localStorage.username}</Typography>
                <br />
                <Button
                  onClick={() => {
                    DeleteLocalStorage()
                  }}
                  variant="contained"
                  color="primary"
                >
                  Выйти
                </Button>
              </div>
            )}
          </MyBox>
        </Grid>
      </Grid>
    </Container>
  )
}
