import React from 'react'
import { useContext } from 'react'
import Context1 from '../../context'

const Donor = () => {
  const dataFromContext = useContext(Context1)
  return (
    <div key={dataFromContext.donor.id}>
    <h4>{dataFromContext.donor.name}</h4>
    <p>{dataFromContext.donor.amount} שקלים</p>
  </div>
  )
}

export default Donor