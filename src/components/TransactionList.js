import React from 'react'
import { GlobalContext } from '../context/GlobalState.js' //drops the state in
import { useContext } from 'react'; //sets up that state so you can pull out of that state
import Transaction from './Transaction.js'

export default function TransactionList() {

  const { transactions } = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
          {transactions.map( (eachTransaction) => (
            <Transaction key={eachTransaction.id} eachTransaction={eachTransaction}/>
          ))}
        </ul>
    </>
  )
}
