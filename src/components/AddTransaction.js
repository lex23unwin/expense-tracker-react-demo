import React from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState.js' //drop the global state context at the front door of this js file
import { useContext } from 'react' //allows you to actually use and extract info from the global state context


export default function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { transactions, addTransaction, deleteTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {id: Math.floor(Math.random() * 1000000),
            text: text, amount: parseInt(amount)}

        addTransaction(newTransaction)
    }

  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
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
