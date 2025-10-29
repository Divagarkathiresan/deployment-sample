import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onUserAdded }) {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    address: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', {
        ...user,
        age: parseInt(user.age)
      });
      setMessage('User added successfully!');
      setUser({ name: '', age: '', gender: '', address: '' });
      onUserAdded();
    } catch (error) {
      setMessage('Error adding user');
    }
  };

  return (
    <div className="user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default UserForm;