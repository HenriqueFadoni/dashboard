import React, { useState } from 'react';

const DrinkCounter = () => {
  const [counter, setCounter] = useState(5);

  const addHandler = () => setCounter(counter + 1);

  const subtractHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h3>Number of Drinks in the Fridge</h3>
      <button onClick={addHandler}>+</button>
      <button onClick={subtractHandler}>-</button>
    </div>
  );
};

export default DrinkCounter;