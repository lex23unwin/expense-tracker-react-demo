import React from 'react'
import { GlobalContext } from '../context/GlobalContext.js'
import { useContext } from 'react'
import TransactionItem from './TransactionItem.js'

export default function TransactionList() {

  const { transactionsState, deleteTransaction } = useContext(GlobalContext)

  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactionsState.transactions && transactionsState.transactions.map(eachTransaction => (
              <TransactionItem eachTransaction={eachTransaction} deleteTransaction={deleteTransaction}/>
            ))}
        </ul>
    </>
  )
}
