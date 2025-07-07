from fastapi import APIRouter, HTTPException
from src.models.instagram import ComparisonRequest
from src.config import db
from datetime import datetime

router = APIRouter()

@router.post("/compare")
async def compare_accounts(data: ComparisonRequest):
    analytics1 = await db.analytics.find_one({"username": data.username1})
    analytics2 = await db.analytics.find_one({"username": data.username2})
    if not analytics1 or not analytics2:
        raise HTTPException(status_code=404, detail="One or both accounts not found")
    comparison = {
        "user_id": "user_id_here",  # Replace with authenticated user ID
        "username1": data.username1,
        "username2": data.username2,
        "metrics": {
            "followers_comparison": {"username1": analytics1["followers"]["count"], "username2": analytics2["followers"]["count"]}
        },
        "created_at": datetime.utcnow()
    }
    await db.comparisons.insert_one(comparison)
    return comparison