import React, { useContext, useEffect } from "react";
import { GlobalContext } from "context/GlobalState";
import TransactionListItem from "components/TransactionListItem";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      {transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <TransactionListItem
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </ul>
      ) : (
        <small>There is no transaction record</small>
      )}
    </>
  );
};

export default TransactionList;
