import React from 'react'
import { GlobalContext } from '../context/GlobalState.js' //plops in the state, ready to be used
import { useContext } from 'react' //this will actually use it, grab hold of it, extract info from it

export default function Balance() {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map( (eachTransaction) => eachTransaction.amount);
  console.log("Amounts: ", amounts)
  const total = amounts.reduce( (acc, item) => (acc += item), 0).toFixed(2);
  console.log("Total: ", total)

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </>
  )
}
