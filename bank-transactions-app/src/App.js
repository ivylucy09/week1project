import React, { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then(response => response.json())
    .then(data => {
      setTransactions([...transactions, data]);
    });
  };

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    })
    .catch(error => console.error('Error:', error));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionsTable transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
