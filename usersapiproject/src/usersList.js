import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div className="users">
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> <span>{user.email}</span>
            </p>
            <p>
              <strong>Phone:</strong> <span>{user.phone}</span>
            </p>
            <p>
              <strong>Address:</strong>
              <span>
                {user.address.street}, {user.address.city}
              </span>
            </p>
            <p>
              <strong>Website:</strong> <span>{user.website}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
