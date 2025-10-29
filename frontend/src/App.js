import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('form');
  const [refreshList, setRefreshList] = useState(false);

  const handleUserAdded = () => {
    setRefreshList(!refreshList);
  };

  return (
    <div className="App">
      <header>
        <h1>User Management System</h1>
        <nav>
          <button onClick={() => setCurrentView('form')}>Add User</button>
          <button onClick={() => setCurrentView('list')}>View Details</button>
        </nav>
      </header>
      
      {currentView === 'form' ? (
        <UserForm onUserAdded={handleUserAdded} />
      ) : (
        <UserList key={refreshList} />
      )}
    </div>
  );
}

export default App;