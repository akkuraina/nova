import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="app-container">
      <div className="user-form-section">
        <h2>User Form</h2>
        <UserForm onAddUser={handleAddUser} />
      </div>
      <div className="user-table-section">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
