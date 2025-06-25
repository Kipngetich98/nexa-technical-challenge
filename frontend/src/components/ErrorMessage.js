import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div style={{ 
      color: 'red', 
      backgroundColor: '#ffe6e6', 
      padding: '0.5rem', 
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      {error}
    </div>
  );
};

export default ErrorMessage;
