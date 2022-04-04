export default function reducer(state, action) {
  switch (action.type) {
    case "GET_TRANSACTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };

    case "DELETE_TRANSACTION_SUCCESS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    case "ADD_TRANSACTION_SUCCESS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "GET_TRANSACTIONS_ERROR":
    case "DELETE_TRANSACTION_ERROR":
    case "ADD_TRANSACTION_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
