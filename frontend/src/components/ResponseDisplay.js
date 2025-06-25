import React from 'react';

const ResponseDisplay = ({ response }) => {
  if (!response) return null;

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '1rem', 
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
};

export default ResponseDisplay;
