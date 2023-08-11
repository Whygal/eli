import React, { useContext } from 'react'
import { FormControl, Button, Stack } from '@mui/material'
import { MyContext } from '../../context/MyContext'
const Buttons = () => {
  const dataFormContext = useContext(MyContext)
  return (
    <div>
                    <FormControl>
                      <Stack spacing={2} sx={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "center" }}>
                        <Button variant="contained" sx={{ marginTop: "2em" }} onClick={() => dataFormContext.setAmount(120)}>תרום 120 שקלים</Button>
                        <Button variant="contained" onClick={() => dataFormContext.setAmount(300)}>תרום 300 שקלים</Button>
                        <Button variant="contained" onClick={() => dataFormContext.setAmount(770)}>תרום 770 שקלים</Button>
                        <Button variant="contained" onClick={() => dataFormContext.setAmount(null)}>תרום סכום אחר</Button>
                      </Stack>
                    </FormControl>
    </div>
  )
}

export default Buttons