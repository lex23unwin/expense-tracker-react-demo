import React from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import { useContext } from 'react'

const Header = () => {

  const context = useContext(GlobalContext)

  return (
      <h2>
        Expense Tracker
    </h2>
  )
}

export default Header