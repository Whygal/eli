import React, { useContext } from 'react'
import { FormControl, Button, Stack } from '@mui/material'
import { MyContext } from '../../context/MyContext'
import "./Buttons.css"

const Buttons = () => {
  const dataFormContext = useContext(MyContext)
  return (
    <div className='Buttons'>
                    <FormControl>
                        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" width={"15.6em"} marginBottom={2}>
                          <Button onClick={() => dataFormContext.setAmount(120)}>תרום 120 שקלים</Button>
                          <Button onClick={() => dataFormContext.setAmount(300)}>תרום 300 שקלים</Button>
                          <Button onClick={() => dataFormContext.setAmount(770)}>תרום 770 שקלים</Button>
                          <Button onClick={() => dataFormContext.setAmount(null)}>תרום סכום אחר</Button>
                        </Stack>
                    </FormControl>
    </div>
  )
}

export default Buttons