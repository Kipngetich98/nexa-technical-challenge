import React, { useState } from 'react';

const QuestionForm = ({ onSubmit, loading }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    if (!question.trim()) return;
    onSubmit(question);
    setQuestion('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSubmit();
    }
  };

  return (
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
        onClick={handleSubmit}
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
  );
};

export default QuestionForm;
