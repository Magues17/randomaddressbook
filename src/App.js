import React, { useState, useEffect } from 'react';
import UserList from './userlist';
import './useritem.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();

  }, []);


  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=25');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users', error);

    }
  };
  return (
    <div >
      <h1> User List </h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
