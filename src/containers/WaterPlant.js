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

    if (daysRemaining >= 3) {
      setWarning(true);
    }
  }, []);

  const waterHandler = () => setLastWatered(today);

  return (
    <div>
      <h3>Last Watered: {lastWatered}</h3>
      <button onClick={waterHandler}>Water it</button>
    </div>
  );
};

export default WaterPlant;
