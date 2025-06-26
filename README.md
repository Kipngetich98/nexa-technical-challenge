# 🧪 Crewmind.ai – Technical Challenge

Thank you for your interest in the **Lead Fullstack Developer** position at Nexa Consulting.

This short technical challenge is designed to reflect a simplified version of what we are building: an intelligent assistant that interacts via a frontend, stores memory, and returns contextual responses.

---

## 🎥 Demo

You can view a short recording of the application working here: [Jam Demo – Application Walkthrough](https://jam.dev/c/65565cd6-5ce6-417e-908d-f2edbaa686e0)

---

## 📌 Objective

Build a minimal fullstack assistant that allows a user to ask a question, stores it, and returns a (simulated) response.

---

## 🚀 How to Run the Application

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up MongoDB:
   - **Local MongoDB**: Install MongoDB locally and ensure it's running on `mongodb://localhost:27017`
   - **MongoDB Atlas**: Create a cluster and update the connection string in `.env`

4. Create environment file (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string if needed
   ```

5. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

---

## 🧱 Features Implemented

### Core Requirements ✅
- **React Frontend**: Simple, clean interface with text input and send button
- **FastAPI Backend**: RESTful API with proper CORS configuration
- **MongoDB Integration**: Questions are stored with timestamps in MongoDB
- **Fixed Response**: Returns the specified response: "Thanks for your question, I'll think about it."

### Bonus Features ✅
- **Timestamps**: Each question is stored with a UTC timestamp
- **History Endpoint**: `/history` endpoint returns all stored questions with timestamps
- **Enhanced UI**: 
  - Loading states and error handling
  - Conversation history viewer
  - Keyboard support (Enter to send)
  - Responsive design
  - Better visual feedback

---

## ⚙️ Technologies Used

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Motor**: Async MongoDB driver for Python
- **PyMongo**: MongoDB driver for Python
- **Pydantic**: Data validation using Python type annotations
- **Uvicorn**: ASGI server for running FastAPI

### Frontend
- **React**: JavaScript library for building user interfaces
- **React Hooks**: useState, useEffect for state management
- **Fetch API**: For making HTTP requests to the backend

### Database
- **MongoDB**: NoSQL document database for storing questions and responses

---

## 🏗️ Project Structure

```
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py          # FastAPI application entry point
│   │   ├── models.py        # Pydantic models
│   │   ├── database.py      # MongoDB connection and configuration
│   │   └── routers/
│   │       ├── __init__.py
│   │       ├── questions.py # Question-related endpoints
│   │       └── health.py    # Health check endpoint
│   ├── pyproject.toml       # Poetry dependencies
│   ├── Dockerfile           # Docker configuration
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # React app entry point
│   │   ├── components/     # React components
│   │   │   ├── QuestionForm.js
│   │   │   ├── ResponseDisplay.js
│   │   │   ├── ErrorMessage.js
│   │   │   └── HistoryList.js
│   │   ├── services/       # API service layer
│   │   │   └── api.js
│   │   └── utils/          # Utility functions and constants
│   │       └── constants.js
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── package.json        # Node.js dependencies
│   ├── .env                # Production environment variables
│   └── .env.local          # Local development environment variables
└── README.md               # This file
```

---

## 🔌 API Endpoints

### POST `/ask`
Submit a question to the assistant.

**Request Body:**
```json
{
  "question": "What is the meaning of life?"
}
```

**Response:**
```json
{
  "response": "Thanks for your question, I'll think about it."
}
```

### GET `/history`
Retrieve all stored questions with timestamps.

**Response:**
```json
[
  {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "question": "What is the meaning of life?",
    "timestamp": "2024-06-25T15:30:45.123456",
    "response": "Thanks for your question, I'll think about it."
  }
]
```

### GET `/`
Health check endpoint.

**Response:**
```json
{
  "message": "Crewmind Assistant API is running"
}
```

---

## 🔧 What I'd Do Differently With More Time

### Technical Improvements
1. **Authentication & Authorization**: Add user authentication to track individual conversations
2. **Input Validation**: More robust input validation and sanitization
3. **Error Handling**: More comprehensive error handling and logging
4. **Testing**: Unit tests for both frontend and backend components
5. **Environment Configuration**: Better environment variable management
6. **Rate Limiting**: Implement rate limiting to prevent abuse
7. **Database Indexing**: Add proper MongoDB indexes for better performance
8. **Caching**: Implement Redis caching for frequently accessed data

### Feature Enhancements
1. **Real AI Integration**: Connect to OpenAI API or similar for dynamic responses
2. **Conversation Threading**: Group related questions into conversation threads
3. **Search Functionality**: Allow users to search through their question history
4. **Export Feature**: Allow users to export their conversation history
5. **Real-time Updates**: WebSocket integration for real-time updates
6. **Rich Text Support**: Support for markdown or rich text in questions/responses

### UI/UX Improvements
1. **Better Design**: More polished UI with proper CSS framework (Tailwind, Material-UI)
2. **Mobile Optimization**: Better mobile responsiveness
3. **Accessibility**: ARIA labels and keyboard navigation improvements
4. **Loading Animations**: Better loading states and animations
5. **Pagination**: Paginate history for better performance with large datasets

### DevOps & Production
1. **CI/CD Pipeline**: Automated testing and deployment
2. **Monitoring**: Application monitoring and logging (Sentry, DataDog)
3. **Performance Optimization**: Code splitting, lazy loading, caching strategies
4. **Security**: HTTPS, input sanitization, SQL injection prevention
5. **Scalability**: Load balancing, database sharding considerations
6. **Containerization**: Docker support for consistent deployments

---

## 🧭 Development Approach

This implementation focuses on:
- **Code Clarity**: Clean, readable code with proper separation of concerns
- **Best Practices**: Following React and FastAPI conventions with modular architecture
- **Error Handling**: Graceful error handling on both frontend and backend
- **User Experience**: Intuitive interface with proper feedback
- **Extensibility**: Code structure that allows for easy future enhancements
- **Scalability**: Modular backend with separate routers and services
- **Maintainability**: Component-based frontend architecture

### Architecture Highlights
- **Backend**: Structured with FastAPI routers, separate models, database layer, and dependency injection
- **Frontend**: Component-based React architecture with service layer for API calls
- **Deployment**: Containerized backend with proper uvicorn configuration
- **Environment Management**: Separate configuration for development and production

---

Thank you for reviewing this technical challenge implementation!
