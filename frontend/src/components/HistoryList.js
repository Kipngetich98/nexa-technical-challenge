import React from 'react';

const HistoryList = ({ history, showHistory, onToggleHistory }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <button 
        onClick={onToggleHistory}
        style={{ 
          padding: '0.5rem 1rem',
          fontSize: '14px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        {showHistory ? 'Hide History' : 'Show History'}
      </button>

      {showHistory && (
        <div>
          <h3>Conversation History</h3>
          {history.length === 0 ? (
            <p>No questions asked yet.</p>
          ) : (
            <div>
              {history.map((item) => (
                <div key={item.id} style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '1rem', 
                  marginBottom: '0.5rem',
                  borderRadius: '4px',
                  borderLeft: '4px solid #007bff'
                }}>
                  <p><strong>Q:</strong> {item.question}</p>
                  <p><strong>A:</strong> {item.response}</p>
                  <small style={{ color: '#666' }}>
                    {new Date(item.timestamp).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryList;
