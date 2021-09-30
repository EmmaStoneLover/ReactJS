import React from 'react'
import { Typography, Box } from '@material-ui/core'
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
                <div
                  onClick={() => {
                    setTextMore(item)
                    setDeleted(null)
                  }}
                  style={{
                    wordBreak: 'break-all',
                    padding: 15,
                    paddingLeft: 25,
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="h6">{item.text}</Typography>
                </div>
              </MyBox>
            )
          })
      ) : (
        <Box textAlign="center">
          {/* <Typography>Загрузка...</Typography> */}
          <img src="./loading.png" alt={'alt-text'} />
        </Box>
      )}
    </MyBox>
  )
}