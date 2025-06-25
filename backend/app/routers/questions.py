from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from datetime import datetime

from ..models import Question, QuestionResponse
from ..database import get_database

router = APIRouter()

@router.post("/ask")
async def ask_question(payload: Question):
    try:
        db = get_database()
        question_doc = {
            "question": payload.question,
            "timestamp": datetime.utcnow(),
            "response": "Thanks for your question, I'll think about it."
        }
        
        result = await db.collection.insert_one(question_doc)
        
        return {"response": "Thanks for your question, I'll think about it."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

@router.get("/history")
async def get_history() -> List[Dict[str, Any]]:
    try:
        db = get_database()
        cursor = db.collection.find().sort("timestamp", -1)
        questions = []
        
        async for doc in cursor:
            questions.append({
                "id": str(doc["_id"]),
                "question": doc["question"],
                "timestamp": doc["timestamp"].isoformat(),
                "response": doc["response"]
            })
        
        return questions
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
