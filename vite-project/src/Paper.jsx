import React, { useState } from 'react';
import './paper.css';


const singleImage = {
  id: 'my-marketing-image', 
  src: 'https://i.postimg.cc/SQWSQv91/download-11.jpg', 
  alt: 'Marketing',            
  description: 'Merzado advertising and Marketing helps boost your sales',  
};


const imagesPerRow = 3;       
const initialRows = 2;        
const rowsToAddOnClick = 1; 

function RecommendedSection() {
  
  const [rows, setRows] = useState(initialRows);
  const [isLoading, setIsLoading] = useState(false);

  
  const handleViewMore = () => {
    if (isLoading) return;

    setIsLoading(true);    
    setTimeout(() => {
     
      setRows(rows + rowsToAddOnClick); 
      setIsLoading(false);     
    }, 1000);
  };


  const numberOfImages = rows * imagesPerRow;


  const allLoaded = numberOfImages >= 9;


  return (
    <div className='Total'>
    <div className="recommended-section">

      <h2 className='heading'>Recommended For You</h2>

     
      <div className="image-grid">
   
 
        {Array(numberOfImages).fill(singleImage).map((image, index) => {
          return (
            <div key={index} className="image-item">
            
              <img src={image.src} alt={image.alt} />
             
              <p className='image-description'>{image.description}</p>
            </div>
          );
        })}
      </div>
      </div>

      
      {!allLoaded && (
        <div className='btn'><button
          onClick={handleViewMore}
          className="view-more-button"
          disabled={isLoading} 
        >
          {isLoading ? 'Loading...' : 'View More ↓'}
        </button></div>
      )}

      {allLoaded && <p className="no-more-images">No more recommendations</p>}
    </div>
    
  );
}


export default RecommendedSection;