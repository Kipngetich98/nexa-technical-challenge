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
        # Simple dynamic logic
        if "AI" in payload.question or "ai" in payload.question:
            response_text = "AI is transforming the world!"
        elif "hello" in payload.question.lower():
            response_text = "Hello to you too!"
        else:
            response_text = f"You asked: {payload.question}"

        question_doc = {
            "question": payload.question,
            "timestamp": datetime.utcnow(),
            "response": response_text
        }
        await db.collection.insert_one(question_doc)
        return {"response": response_text}
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
