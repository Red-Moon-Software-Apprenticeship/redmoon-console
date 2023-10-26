"use client"
import React, { useState } from 'react';

const AdminEditForm = ({ formAction }) => {

 
  return (
    <form onSubmit={formAction}>
      <h2>Edit Admin Profile</h2>

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default AdminEditForm;

