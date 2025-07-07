from fastapi import APIRouter, HTTPException
from src.models.user import UserCreate, UserLogin
from src.config import db, settings
import jwt
from jwt import exceptions as JWTError
from datetime import datetime, timedelta

router = APIRouter()

@router.post("/signup")
async def signup(user: UserCreate):
    if await db.users.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email already registered")
    user_dict = user.dict()
    user_dict["password"] = "hashed_password_here"  # Implement hashing (e.g., bcrypt)
    user_dict["created_at"] = datetime.utcnow()
    await db.users.insert_one(user_dict)
    return {"message": "User created successfully"}

@router.post("/login")
async def login(user: UserLogin):
    db_user = await db.users.find_one({"email": user.email})
    if not db_user or "hashed_password_here" != user.password:  # Implement password check
        raise HTTPException(status_code=400, detail="Invalid credentials")
    payload = {"sub": db_user["email"], "exp": datetime.utcnow() + timedelta(hours=24)}
    token = jwt.encode(payload, settings.secret_key, algorithm="HS256")
    return {"token": token}