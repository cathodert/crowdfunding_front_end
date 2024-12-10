// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => { 
    const handleChange = (event) => { 
    const value = event.target.value; 
    onSelect(value); };


  return (
    <select onChange={handleChange}>
      <option value="SU">Music lover</option>
      <option value="BM">Member of a band</option>
    </select>
  );
};

export default Dropdown;
