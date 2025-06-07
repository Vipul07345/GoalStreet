import React from 'react';

const singleImage = { // Changed variable name to singleImage
    src: "https://i.postimg.cc/0y6kGHTv/download-10.jpg",
    description: "Good Eye Image",
};

function Images10() {
    const numberOfImages = 11; // Changed variable name to numberOfImages
    return (
        <div>
            {Array(numberOfImages).fill(singleImage).map((image, index) => { // Changed value to image
                return (
                    <div key={index} aria-label={`Image ${index + 1}`}> {/* Added aria-label for accessibility */}
                        <img src={image.src} alt={`Image ${index + 1}`} style={{ maxWidth: '100%' }}/> {/* Added alt and style */}
                        <p>{image.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Images10;