import React from 'react'
import { GlobalContext } from '../context/GlobalContext.js'
import { useContext } from 'react'

export default function Balance() {

  const { transactionsState } = useContext(GlobalContext)

  const total = transactionsState.transactions ? transactionsState.transactions.reduce( (acc, item) => (acc += item.amount), 0).toFixed(2) : 0;

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </>
  )
}
