import React, { useState } from 'react'
import { Typography, TextField } from '@material-ui/core'
import MyBox from '../../../components/MyBox'

export default function AddText() {
  const [list, setList] = useState([{ id: 1, text: 'Text example' }])
  const [text, setText] = useState('')
  function addTextEvent(event) {
    event.preventDefault()
    setList([...list, { id: Date.now(), text: text }])
  }

  return (
    <>
      <MyBox p="0" mb={15}>
        <img src="emma.jpg" alt="" width="100%" style={{ marginBottom: -5 }} />
      </MyBox>
      <Typography>Text text ttt...</Typography>
    </>
  )

  // return (
  //   <>
  //     <MyBox>
  //       <form onSubmit={addTextEvent}>
  //         <TextField
  //           fullWidth
  //           value={text}
  //           variant="outlined"
  //           label="Вставить текст"
  //           onChange={(event) => setText(event.target.value)}
  //         />
  //       </form>
  //     </MyBox>
  //     <br />
  //     <MyBox>
  //       {list.map((item) => {
  //         return (
  //           <Typography
  //             key={item.id}
  //             variant="h6"
  //             style={{ wordBreak: 'break-all' }}
  //           >
  //             {item.text}
  //           </Typography>
  //         )
  //       })}
  //     </MyBox>
  //   </>
  // )
}
