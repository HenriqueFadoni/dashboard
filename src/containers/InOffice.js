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
    <div 
      key={i}
      className="inoffice__item"
    >
      {person}
    </div>
  ));

  return (
    <div className="inoffice__container">
      <h1 className="inoffice__title">People in Office today</h1>
      {renderList}
    </div>
  );
}

export default InOffice;