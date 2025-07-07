from fastapi import APIRouter, HTTPException
from src.services.ai_report import generate_ai_report
from src.config import db
import json

router = APIRouter()

@router.get("/report/{username}")
async def get_report(username: str):
    analytics = await db.analytics.find_one({"username": username})
    if not analytics:
        raise HTTPException(status_code=404, detail="Analytics not found")
    ai_report = generate_ai_report(analytics)
    return {"report": ai_report}