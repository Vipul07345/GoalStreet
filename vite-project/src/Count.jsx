import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

function Counter(props) {
  function Handle() {
    props.setCount(props.count + 1);
  }
  function Sub(){
    props.setCount(props.count-1);
  }
  function Reset(){
    props.setCount(0)

  }
  return(
    <div>{props.count}
        <button onClick={Handle}>Add </button>
        <button onClick={Sub}>Sub </button>
        <button onClick={Reset}>reset </button></div>
  )
  
}

export default Count;