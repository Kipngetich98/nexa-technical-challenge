from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def root():
    return {"message": "Crewmind Assistant API is running"}
