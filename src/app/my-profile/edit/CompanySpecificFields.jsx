"use client" 
import React from 'react';

const CompanySpecificFields = ({address, setAddress}) => {

  return (
    <>
        <label htmlFor='address'>Address:</label>
        <input
             type="text"
             name="address"
             value={address}
             onChange={(e) => setAddress(e.target.value)}
        />
    </>
    );
};

export default CompanySpecificFields;