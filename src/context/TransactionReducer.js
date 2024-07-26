export function transactionReducer( state, action ) {
    switch(action.type)
    {
        case 'ADD_TRANSACTION':

            console.log("Inside ADD_TRANSACTION in TransactionReducer")

            return {
            ...state,
            transactions: [
                ...state.transactions,
                action.payload
                ]
            }

        case 'DELETE_TRANSACTION':
            return { 
                ...state, transactions: state.transactions.filter(eachTransaction => eachTransaction.id !== action.payload)
            }

        default:
            return state
    }
}