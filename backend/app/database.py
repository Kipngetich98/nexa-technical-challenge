from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DATABASE_NAME = "crewmind_assistant"
COLLECTION_NAME = "questions"

class Database:
    client: AsyncIOMotorClient = None
    database = None
    collection = None

db = Database()

async def connect_to_mongo():
    db.client = AsyncIOMotorClient(MONGODB_URL)
    db.database = db.client[DATABASE_NAME]
    db.collection = db.database[COLLECTION_NAME]
    try:
        await db.client.admin.command('ping')
        print("Connected to MongoDB successfully")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")

async def close_mongo_connection():
    if db.client:
        db.client.close()

def get_database():
    return db
