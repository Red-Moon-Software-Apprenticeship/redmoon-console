"use client"
import React, { useState } from 'react';

const CompanyEditForm = ({ formAction }) => {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [bio, setBio] = useState('');

  return (
    <form onSubmit={formAction}>
      <h2>Edit Company Profile</h2>

      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      {/* Add similar input fields for email, city, state, and bio */}

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default CompanyEditForm;
