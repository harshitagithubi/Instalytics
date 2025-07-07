from fastapi import APIRouter, HTTPException
from src.models.instagram import InstagramUsername
from src.services.scraper import scrape_instagram
from src.config import db
from datetime import datetime

router = APIRouter()

@router.post("/analyze")
async def analyze_instagram(data: InstagramUsername):
    try:
        analytics_data = await scrape_instagram(data.username)
        await db.analytics.insert_one(analytics_data)
        return {"message": f"Analytics for {data.username} saved successfully", "data": analytics_data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))