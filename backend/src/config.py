from pydantic_settings import BaseSettings
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    mongodb_uri: str = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
    database_name: str = "instagram_analytics"
    secret_key: str = os.getenv("SECRET_KEY", "your-secret-key")

settings = Settings()

# MongoDB client
client = AsyncIOMotorClient(settings.mongodb_uri)
db = client[settings.database_name]