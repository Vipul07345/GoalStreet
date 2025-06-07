import React, { useState } from 'react';
import './Customercard.css';
import { FaEdit } from 'react-icons/fa'; 

const Customercard = () => {
  const initialData = {
    name: 'Jane Cooper',
    email: 'janecooper@in',
    phone: '+999-999-999',
    address: '28 Willow Park Lane, Springfield, IL',
    license: '',
    subscription: 'Gold',
    numberOfLeads: '10 Leads file',
    dateOfPurchase: '12 May 2025',
  };

  const [userData, setUserData] = useState(initialData);
  const [editingField, setEditingField] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleEdit = (field, currentValue) => {
    setEditingField(field);
    setInputValue(currentValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = (field) => {
    setUserData({ ...userData, [field]: inputValue });
    setEditingField(null);
  };

  return (
    <div className="user-profile-card">
      <div className="header">
        <div className="profile-image">
          <div className="placeholder-image">
            <img src="https://i.postimg.cc/0yXRF1RK/images.jpg"/>
          </div>
        </div>
        <img className="verified-badge" src="https://i.postimg.cc/zB1dPxBR/764ddb717ddafdb9d2ca2187cbd7508c03da6fdc.png"/>
      </div>

      {Object.keys(userData).map((key) => (
        <div key={key} className="info-column">
          <label className="info-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          {editingField === key ? (
            <div className="edit-controls">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="edit-input"
              />
              <button onClick={() => handleSave(key)} className="save-button">
                Save
              </button>
            </div>
          ) : (
            <div className="display-info">
              <span className="info-value">{userData[key]}</span>
              <button onClick={() => handleEdit(key, userData[key])} className="edit-button">
                <FaEdit />
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="merzo-coins">
        Coins
      </div>
    </div>
  );
};

export default Customercard;