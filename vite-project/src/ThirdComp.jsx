import React, { useState } from 'react';
import './App.css';

const CreatePost = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="form-wrapper">
      <h2 className="title">Create Post</h2>

      <div className="form-group">
        <label>Event Name:</label>
        <input type="text" placeholder="Enter Name" />
      </div>

      <div className="form-group">
        {image && <img src={image} alt="Preview" className="image-preview" />}
        <label>Upload Image</label>
        <input type="file" onChange={handleImageChange} />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea placeholder="Enter Details" rows="4" />
      </div>

      <div className="form-group">
        <label>Date of the Event:</label>
        <input type="text" placeholder="Enter Details" />
      </div>

      <div className="button-group">
        <button className="post-button">Post</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default CreatePost;
