from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Question(BaseModel):
    question: str

class QuestionResponse(BaseModel):
    id: str
    question: str
    timestamp: datetime
    response: str

class QuestionCreate(BaseModel):
    question: str
    timestamp: datetime
    response: str
