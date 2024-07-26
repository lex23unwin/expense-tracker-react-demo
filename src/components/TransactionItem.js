import React from 'react'

export default function TransactionItem({ eachTransaction, deleteTransaction }) {
  return (
    <li className={eachTransaction.amount > 0 ? "plus" : "minus"}>
        {eachTransaction.text} 
        <span>{eachTransaction.amount}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(eachTransaction)}>x</button>
    </li>
  )
}
