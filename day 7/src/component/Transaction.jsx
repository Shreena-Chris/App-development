import React, { useState } from 'react';
import '../assests/css/Transaction.css';

const TransactionManagementPage = () => {
  // Sample transaction data (you would fetch this from a backend)
  const initialTransactions = [
    {
      id: 1,
      serialNumber: 'TRX12345',
      username: 'John Doe',
      initialCurrency: 'USD',
      finalCurrency: 'EUR',
      status: 'Processing',
    },
    {
      id: 2,
      serialNumber: 'TRX23456',
      username: 'Jane Smith',
      initialCurrency: 'EUR',
      finalCurrency: 'GBP',
      status: 'Completed',
    },
    {
      id: 3,
      serialNumber: 'TRX34567',
      username: 'Bob Johnson',
      initialCurrency: 'GBP',
      finalCurrency: 'USD',
      status: 'Failed',
    },
    {
      id: 4,
      serialNumber: 'TRX45678',
      username: 'Alice Brown',
      initialCurrency: 'USD',
      finalCurrency: 'JPY',
      status: 'Processing',
    },
    {
      id: 5,
      serialNumber: 'TRX56789',
      username: 'Eve Adams',
      initialCurrency: 'JPY',
      finalCurrency: 'AUD',
      status: 'Completed',
    },
    // Add more transactions here...
  ];

  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <div>
      <h1>Transaction Management</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Serial Number</th>
            <th>Username</th>
            <th>Initial Currency</th>
            <th>Final Currency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.serialNumber}</td>
              <td>{transaction.username}</td>
              <td>{transaction.initialCurrency}</td>
              <td>{transaction.finalCurrency}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionManagementPage;