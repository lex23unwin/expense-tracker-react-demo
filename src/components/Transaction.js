import React from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import { useContext } from 'react'

export default function Transaction({ key, eachTransaction }) {

  const { deleteTransaction } = useContext(GlobalContext)
  const { transactions } = useContext(GlobalContext)

  const sign = eachTransaction.amount < 0 ? '-' : '+'

  return (
    <li id={key} className={sign === '-' ? "minus" : "plus"}>
        {eachTransaction.text} 
        <span>{sign}${Math.abs(eachTransaction.amount)}</span>
        <button 
          className="delete-btn"
          onClick={() => deleteTransaction(eachTransaction.id)}
        >
          x
        </button>
    </li>
  )
}
