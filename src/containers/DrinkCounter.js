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
    <div className="drinkcounter__container">
      <h3>Number of Drinks left in the Fridge:</h3>
      <div className="drinkcounter__container-content">
        <h1 className="drinkcounter__number">{counter}</h1>
        <div className="drinkcounter__btn-container">
          <button
            className="drinkcounter__buttons"
            onClick={addHandler}
          >
            +
          </button>
          <button
            className="drinkcounter__buttons"
            onClick={subtractHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkCounter;
