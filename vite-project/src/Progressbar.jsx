import React, { useState } from 'react';

const Control = () => {
  const [input, setInput] = useState('');

  const Handler = (event) => {
    const newinput = event.target.value;
    setInput(newinput);
  };

  return (
    <div>
      <input
        type="text" // It's good practice to specify the input type
        value={input}
        onChange={Handler}
        placeholder="Type here ..."
      />
      <p>You typed: {input}</p>
    </div>
  );
};

function Progressbar() {
  return (
    <div>
      <h2>Input Control</h2>
      <Control />
      {/* You can add other elements related to a progress bar here later */}
    </div>
  );
}

export default Progressbar;