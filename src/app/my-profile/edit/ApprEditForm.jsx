"use client"
import React, { useState } from 'react';

const ApprenticeEditForm = ({ formAction }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [level, setLevel] = useState(1);

  return (
    <form onSubmit={formAction}>
      <h2>Edit Apprentice Profile</h2>

      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      {/* Add similar input fields for email, city, state, and bio */}
      
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="level">Level:</label>
      <input type="number" id="level" value={level} onChange={(e) => setLevel(e.target.value)} />

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ApprenticeEditForm;
