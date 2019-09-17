import React, { useState, useEffect } from 'react';

const todayHandler = () => {
  const date = new Date();
  return date.getDate();
}

const WaterPlant = () => {
  const [lastWatered, setLastWatered] = useState(15);
  const [today] = useState(todayHandler);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const daysRemaining = today - lastWatered;

    if (daysRemaining >= 1) {
      setWarning(true);
    }
  },[]);

  const waterHandler = () => {
    setLastWatered(today);
    setWarning(false);
  };

  return (
    <div 
      className={
        warning 
        ? "waterplant__warning"
        : "waterplant__container"
      }
    >
      <h3 className="waterplant__text">
        Last Day the plant was Watered:
      </h3>
      <h3 className="waterplant__days">
        {lastWatered}
      </h3>
      <button
        className="waterplant__button"
        onClick={waterHandler}
      >
        Water it
      </button>
    </div>
  );
};

export default WaterPlant;
