import React from 'react'
import { useContext } from 'react'
import { loanFormContext } from './context/loanFormInputs'
function MyInput() {
    let myContext = useContext(loanFormContext)
    
  return (
    <>
    <label htmlFor={myContext.label}>{myContext.label}:</label>
      <input
        value={myContext.evnetInput}
        id={myContext.label}
        onChange={(e) => myContext.handleChange(e.target.value)}
        type={myContext.type}
      />
    </>
  )
}

export default MyInput