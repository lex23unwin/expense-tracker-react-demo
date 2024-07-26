import React from 'react'
import { useState } from 'react'

export default function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

  return (
    <>
        <h3>Add New Transaction</h3>
        <form>
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
