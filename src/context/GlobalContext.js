import { useReducer } from 'react'
import { createContext } from 'react'
import { transactionReducer } from './TransactionReducer.js'

// Initialize State
const initialState = {
    transactions: 
    [

    ]
}

// Create State
export const GlobalContext = createContext(initialState)

// Provide State
export const GlobalProvider = ({ children }) => {
    const [transactionsState, dispatch] = useReducer(transactionReducer, initialState)

    function addTransaction(transaction) {

        console.log("Inside addTransaction in GlobalContext")

        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    function deleteTransaction(transaction) {
        dispatch({ type: 'DELETE_TRANSACTION', payload: transaction.id})
    }

    return (
        <GlobalContext.Provider
        value={{transactionsState, addTransaction, deleteTransaction}}>
            { children }
        </GlobalContext.Provider>
    )
}
