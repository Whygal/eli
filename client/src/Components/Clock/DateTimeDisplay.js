import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <div style={{
        width: '100px',
        padding: '10px',
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'block',
      }}>
        <h4 style={{
          textTransform: 'uppercase',
          fontWeight: '200',
          color: '#0084b4',
          fontSize: '45px'
        }}>{value}</h4>
        <hr style={{
          display: 'block',
          margin: '10px auto',
          width: '10px',
          borderTop: '1px solid #8a8b8c',
        }} />
        <p style={{
          fontSize: '13px',
          fontWeight: '700',
          textTransform: 'uppercase',
          color: '#0084b4'
        }}>{type}</p>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
