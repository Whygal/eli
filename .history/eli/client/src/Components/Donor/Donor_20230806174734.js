import React from 'react'
import { useContext } from 'react'
import Context1 from '../../context'

const Donor = () => {
  const dataFromContext = useContext(Context1)
  return (
    <div>
    <h4>{dataFromContext.donors.name}</h4>
    <p>{dataFromContext.donors.amount} שקלים</p>
  </div>
  )
}

export default Donor