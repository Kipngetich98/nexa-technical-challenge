import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import ResponseDisplay from './components/ResponseDisplay';
import ErrorMessage from './components/ErrorMessage';
import HistoryList from './components/HistoryList';
import { askQuestion, fetchHistory } from './services/api';
import { APP_TITLE } from './utils/constants';

function App() {
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setError('');
    
    try {
      const data = await askQuestion(question);
      setResponse(data.response);
      
      if (showHistory) {
        await loadHistory();
      }
    } catch (err) {
      setError(`Failed to send question: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadHistory = async () => {
    try {
      const data = await fetchHistory();
      setHistory(data);
    } catch (err) {
      setError(`Failed to fetch history: ${err.message}`);
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    if (!showHistory) {
      loadHistory();
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{APP_TITLE}</h1>
      
      <QuestionForm onSubmit={handleQuestionSubmit} loading={loading} />
      
      <ErrorMessage error={error} />
      
      <ResponseDisplay response={response} />

      <HistoryList 
        history={history} 
        showHistory={showHistory} 
        onToggleHistory={toggleHistory} 
      />
    </div>
  );
}

export default App;
