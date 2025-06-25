
import React, { useState, useEffect } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const handleSend = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      setResponse(data.response);
      setQuestion('');
      
      if (showHistory) {
        fetchHistory();
      }
    } catch (err) {
      setError(`Failed to send question: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await fetch('http://localhost:8000/history');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setHistory(data);
    } catch (err) {
      setError(`Failed to fetch history: ${err.message}`);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    if (!showHistory) {
      fetchHistory();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSend();
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Crewmind Assistant – Demo</h1>
      
      <div style={{ marginBottom: '1rem' }}>
        <input 
          value={question} 
          onChange={e => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask something..." 
          style={{ 
            width: '70%', 
            padding: '0.5rem', 
            marginRight: '0.5rem',
            fontSize: '16px'
          }}
          disabled={loading}
        />
        <button 
          onClick={handleSend}
          disabled={loading || !question.trim()}
          style={{ 
            padding: '0.5rem 1rem',
            fontSize: '16px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {error && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#ffe6e6', 
          padding: '0.5rem', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      {response && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '4px',
          marginBottom: '1rem'
        }}>
          <p><strong>Response:</strong> {response}</p>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <button 
          onClick={toggleHistory}
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
                {history.map((item, index) => (
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
    </div>
  );
}

export default App;
