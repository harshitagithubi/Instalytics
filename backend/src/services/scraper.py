from instagrapi import Client
from datetime import datetime

async def scrape_instagram(username: str):
    cl = Client()
    user = cl.user_info_by_username(username)
    return {
        "username": username,
        "analyzed_at": datetime.utcnow(),
        "followers": {"count": user.follower_count},
        "engagement": {"rate": 0.0, "avg_likes": 0.0, "avg_comments": 0.0},
        "posts": []  # Placeholder for post data
    }