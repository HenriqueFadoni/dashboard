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
    <div className="app__drinkcounter--container">
      <h3>Number of Drinks left in the Fridge:</h3>
      <div className="app__drinkcounter--container-content">
        <h1 className="app__drinkcounter--number">{counter}</h1>
        <div className="app__drinkcounter--btn-container">
          <button className="app__drinkcounter--buttons" onClick={addHandler}>+</button>
          <button className="app__drinkcounter--buttons" onClick={subtractHandler}>-</button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCounter;