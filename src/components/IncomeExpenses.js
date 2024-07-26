import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext.js'

export default function IncomeExpenses() {

  const { transactionsState } = useContext(GlobalContext)

  const posTotal = transactionsState.transactions ? 
    transactionsState.transactions
      .filter(eachTransaction => eachTransaction.amount > 0)
      .reduce((total, eachTransaction) => total += eachTransaction.amount, 0)
    : 0

  const negTotal = transactionsState.transactions ? 
    transactionsState.transactions
      .filter(eachTransaction => eachTransaction.amount < 0)
      .reduce( (total, eachTransaction) => total += eachTransaction.amount, 0)
    : 0

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${posTotal}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${negTotal}</p>
        </div>
    </div>
  )
}
