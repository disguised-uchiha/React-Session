import React from 'react'

const Button = ({ children, handleBtnClick }) => {
  let x = "some data in button"
  function apneFunction() {
    return handleBtnClick(x)
  }
  return (
    <button onClick={apneFunction}>{children}</button>
  )
}

export const NewButton = () => {
  return <button>New button text</button>
}

export default Button