import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext.js'

export default function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction, transactionsState } = useContext(GlobalContext)

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Inside HandleSubmit in AddTransaction")

        addTransaction({id: Math.floor(Math.random() * 100000), text: text, amount: parseInt(amount)})

        console.log("Transactions: ", transactionsState)

    }

  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    type="text" 
                    placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                <input 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" 
                    placeholder="Enter amount..." />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}
