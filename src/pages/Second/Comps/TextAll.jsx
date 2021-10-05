import React from 'react'
import { Typography, Box, LinearProgress } from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function TextAll({ load, setTextMore, setDeleted }) {
  return (
    <MyBox>
      <Typography variant="h6">Some shit</Typography>
      <br />
      {load && load !== null ? (
        load
          .slice()
          .reverse()
          .map((item) => {
            return (
              <MyBox key={item._id} p={'0px'} mb={15}>
                <a
                  onClick={() => {
                    setTextMore(item)
                    setDeleted(null)
                  }}
                  href="#BoxRight"
                  style={{
                    // wordBreak: 'break-all',
                    padding: 15,
                    paddingLeft: 25,
                    cursor: 'pointer',
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="h6" noWrap>
                    {item.text}
                  </Typography>
                </a>
              </MyBox>
            )
          })
      ) : (
        <Box textAlign="center">
          <LinearProgress />
        </Box>
      )}
    </MyBox>
  )
}
