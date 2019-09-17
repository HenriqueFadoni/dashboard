import React, { useState } from 'react';

const InOffice = () => {
  const [workingToday] = useState([
    'Jessy', 
    'Mateo', 
    'Pauline', 
    'Jose', 
    'Adam'
  ]);

  const renderList = workingToday.map((person, i) => (
    <div key={i}>{person}</div>
  ));

  return (
    <div>
      {renderList}
    </div>
  );
}

export default InOffice;